# Luang Mè Hospital — Public Website

A static public website for **Luang Mè Hospital**, built with React + Vite + TypeScript + Tailwind CSS. It matches the Figma design at [https://flip-stunt-74340392.figma.site](https://flip-stunt-74340392.figma.site).

> **Architecture note:** This project was previously full-stack (Express + Prisma + SQLite). The backend has been removed and the site is now **fully static** — all content is served from the frontend with no API or database. Department, doctor, and partnership data live in [`frontend/src/data/catalog.ts`](frontend/src/data/catalog.ts). Edit that file to update those pages.

---

## Technology Stack

- **React 18** + **TypeScript**
- **Vite** (build/dev)
- **Tailwind CSS**
- **React Router v6**
- **Lucide React** (icons)

---

## Project Structure

```text
project/
├── frontend/
│   ├── src/
│   │   ├── components/   # Reusable UI
│   │   ├── contexts/     # LanguageContext (EN/KM), AuthContext
│   │   ├── data/         # catalog.ts — departments, doctors, partnerships
│   │   ├── hooks/        # Custom hooks (useDebounce)
│   │   ├── pages/        # Public pages
│   │   ├── routes/       # App routing table
│   │   ├── types/        # TypeScript models
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/           # image/ and images/ assets, _redirects
│   └── package.json
├── docs/
├── package.json          # thin wrapper → frontend scripts
└── README.md
```

---

## Getting Started

From the repository root:

```bash
npm --prefix frontend install   # install once
npm run dev                     # start Vite dev server (http://localhost:5173)
```

---

## Production Build

```bash
npm run build          # builds frontend/ → frontend/dist
npm run preview        # preview the production build locally
```

The output in `frontend/dist` is a static bundle. `frontend/public/_redirects`
contains the SPA fallback (`/*  /index.html  200`) for client-side routing.

---

## Deploy (static hosting)

Deploy `frontend/dist` to any static host. For example, **Cloudflare Pages** or **Netlify**:

- **Build command:** `npm --prefix frontend install && npm --prefix frontend run build`
- **Output directory:** `frontend/dist`

The included `_redirects` file makes deep links (e.g. `/doctors`) resolve to the SPA on refresh.

---

## Features

1. **Bilingual support (English & Khmer)** — header toggle (`EN` / `ខ្មែរ`).
2. **Departments / Doctors / Partnerships** — served from the static catalog, with client-side search, filtering, and pagination.
3. **News & informational pages**.

> **Removed with the backend:** the Admin dashboard (`/admin`), the Contact form
> submission, and the live Emergency bed tracker depended on the API and are no
> longer functional. See [`frontend/src/pages/`](frontend/src/pages/) if you
> intend to convert or remove them.
