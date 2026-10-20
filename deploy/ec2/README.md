# Deploy on AWS EC2 (Ubuntu 24.04 LTS)

This setup runs the Express API and built React site in one Node.js process,
with Nginx as the public reverse proxy and SQLite stored outside the app
directory. It does not create AWS resources or configure a domain for you.

## 1. Prepare AWS

1. Launch an Ubuntu Server 24.04 LTS EC2 instance. Use an instance size suitable
   for your expected traffic and an EBS volume large enough for the database,
   uploads, and backups.
2. In the instance security group, allow SSH (TCP 22) only from your
   administrator IP, and HTTP (TCP 80) and HTTPS (TCP 443) from the internet.
   Do not expose port 4000 or SQLite files.
3. Associate a stable public IP and point your domain's DNS A records at it.

## 2. Install system packages and Node.js

Connect over SSH, then install Nginx, Git, and Node.js 22 LTS using the
official Node.js installation instructions for Ubuntu. Confirm `node --version`
is 22.x and that Node is installed at `/usr/bin/node` (the systemd unit uses
that path).

```bash
sudo apt update
sudo apt install -y nginx git sqlite3
```

## 3. Install and build the application

Create a dedicated service account and application directories:

```bash
sudo adduser --system --group --no-create-home luangme-hospital
sudo git clone https://github.com/kongpheakdeypheakdey/LMH.git /opt/luangme-hospital
sudo install -d -o luangme-hospital -g luangme-hospital /opt/luangme-hospital/uploads
```

Build both packages:

```bash
cd /opt/luangme-hospital
sudo npm ci --prefix backend
sudo npm ci --prefix frontend
cd backend
sudo env DATABASE_URL=file:/var/lib/luangme-hospital/luangme-hospital.db \
  ./node_modules/.bin/prisma generate --schema=../prisma/schema.prisma
sudo npm run build
cd ..
sudo npm --prefix frontend run build
sudo chown -R root:luangme-hospital /opt/luangme-hospital
sudo chown -R luangme-hospital:luangme-hospital /opt/luangme-hospital/uploads
sudo install -d -o luangme-hospital -g luangme-hospital /var/lib/luangme-hospital
```

Run `npm ci` again when deploying a new release that changes either lockfile.
Build on the EC2 host so Prisma installs the correct Linux engine.

## 4. Configure production environment and initialize SQLite

Create a root-owned environment file. Replace the domain and email, and
generate two different random secrets with `openssl rand -hex 32`. Choose a
unique initial admin password of at least 16 characters.

```bash
sudo install -d -m 0750 /etc/luangme-hospital
sudoedit /etc/luangme-hospital/production.env
```

Add these entries (without quotes):

```ini
NODE_ENV=production
PORT=4000
DATABASE_URL=file:/var/lib/luangme-hospital/luangme-hospital.db
CLIENT_URL=https://example.com
JWT_SECRET=REPLACE_WITH_A_RANDOM_SECRET
SESSION_SECRET=REPLACE_WITH_A_DIFFERENT_RANDOM_SECRET
INITIAL_ADMIN_EMAIL=admin@example.com
INITIAL_ADMIN_PASSWORD=REPLACE_WITH_A_UNIQUE_PASSWORD_OF_AT_LEAST_16_CHARACTERS
INITIAL_ADMIN_NAME=Hospital Administrator
```

Restrict access to this file:

```bash
sudo chown root:root /etc/luangme-hospital/production.env
sudo chmod 600 /etc/luangme-hospital/production.env
```

Create the schema and initial administrator before starting the service:

```bash
sudo systemd-run --wait --pipe --unit=luangme-initial-setup \
  --property=User=luangme-hospital \
  --property=WorkingDirectory=/opt/luangme-hospital/backend \
  --property=EnvironmentFile=/etc/luangme-hospital/production.env \
  /bin/bash -c './node_modules/.bin/prisma db push --schema=../prisma/schema.prisma && /usr/bin/node dist/scripts/ensureInitialAdmin.js && /usr/bin/node dist/scripts/seedCatalog.js'
```

`seedCatalog.js` populates the public website content (departments, doctors,
partnerships, news). It is non-destructive and idempotent: it only inserts
each kind of record when its table is empty, and never touches users,
appointments, or contact inquiries, so it is safe to run on every release.

After the administrator is created, remove the three `INITIAL_ADMIN_*` lines
from the environment file with `sudoedit`. Keep the admin password in a
password manager; do not commit it or put it in deployment scripts.

For later releases, back up the SQLite database before applying a Prisma schema
change. Review the change and run `prisma db push` with the production
`DATABASE_URL` before restarting the service. Do not use `prisma migrate dev`
in production.

To make a consistent SQLite backup before a schema change, run:

```bash
sudo -u luangme-hospital sqlite3 /var/lib/luangme-hospital/luangme-hospital.db \
  ".backup '/var/lib/luangme-hospital/backup-$(date +%F-%H%M%S).db'"
```

## 5. Configure systemd and Nginx

Install and enable the application service:

```bash
sudo cp /opt/luangme-hospital/deploy/ec2/luangme-hospital.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now luangme-hospital
sudo systemctl status luangme-hospital
```

Configure Nginx with your actual domain:

```bash
sudo cp /opt/luangme-hospital/deploy/ec2/nginx.conf.example /etc/nginx/sites-available/luangme-hospital
sudoedit /etc/nginx/sites-available/luangme-hospital
sudo ln -s /etc/nginx/sites-available/luangme-hospital /etc/nginx/sites-enabled/luangme-hospital
sudo nginx -t
sudo systemctl reload nginx
```

Remove the default Nginx site if it conflicts. Visit the domain over HTTP and
confirm the site loads and `/health` returns a JSON status.

## 6. Enable HTTPS and verify

Once DNS resolves to the instance and HTTP works, install Certbot using the
official Certbot instructions for Ubuntu/Nginx, then request certificates for
the domain names configured in Nginx. Certbot will configure HTTPS and
certificate renewal.

Check service logs with:

```bash
sudo journalctl -u luangme-hospital -n 100 --no-pager
```

Keep regular, tested backups of `/var/lib/luangme-hospital/` and
`/opt/luangme-hospital/uploads/`. Use encrypted EBS snapshots or another
approved backup target; the database and uploads contain hospital data.

## 7. Deploy a later release

Run updates as an administrator. The app files are root-owned so the service
account can read but cannot modify its own code.

```bash
sudo systemctl stop luangme-hospital
sudo git -C /opt/luangme-hospital pull --ff-only
sudo npm ci --prefix /opt/luangme-hospital/backend
sudo npm ci --prefix /opt/luangme-hospital/frontend
sudo env DATABASE_URL=file:/var/lib/luangme-hospital/luangme-hospital.db \
  /opt/luangme-hospital/backend/node_modules/.bin/prisma generate \
  --schema=/opt/luangme-hospital/prisma/schema.prisma
sudo npm run build --prefix /opt/luangme-hospital/backend
sudo npm --prefix /opt/luangme-hospital/frontend run build
```

If the release changes `prisma/schema.prisma`, take and verify a database
backup first, then apply the reviewed schema change with `prisma db push`
using the production `DATABASE_URL` as the service account:

```bash
sudo systemd-run --wait --pipe --unit=luangme-schema-update \
  --property=User=luangme-hospital \
  --property=WorkingDirectory=/opt/luangme-hospital/backend \
  --property=EnvironmentFile=/etc/luangme-hospital/production.env \
  /opt/luangme-hospital/backend/node_modules/.bin/prisma db push \
  --schema=../prisma/schema.prisma
```

Ensure the public catalog content exists (safe to run every release; it only
inserts departments, doctors, partnerships, and news when those tables are
empty and leaves all other data untouched):

```bash
sudo systemd-run --wait --pipe --unit=luangme-seed-catalog \
  --property=User=luangme-hospital \
  --property=WorkingDirectory=/opt/luangme-hospital/backend \
  --property=EnvironmentFile=/etc/luangme-hospital/production.env \
  /usr/bin/node dist/scripts/seedCatalog.js
```

Restart and check the service after every release:

```bash
sudo systemctl restart luangme-hospital
sudo systemctl --no-pager --full status luangme-hospital
curl --fail https://luangme-hospital.com
```
