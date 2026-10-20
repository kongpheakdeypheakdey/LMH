import app from './app';
import { config } from './config';
import { logger } from './utils/logger';
import { prisma } from './utils/prisma';

async function startServer() {
  try {
    await prisma.$connect();
    logger.info('Connected successfully to SQLite database via Prisma ORM.');

    const onListening = () => {
      logger.info(`Luang Mè Hospital Backend API server listening on http://localhost:${config.port}`);
      logger.info(`Environment: ${config.env}`);
    };

    if (config.host) {
      app.listen(config.port, config.host, onListening);
    } else {
      app.listen(config.port, onListening);
    }
  } catch (error) {
    logger.error('Failed to start backend server:', error);
    process.exit(1);
  }
}

startServer();
