import cors from 'cors';
import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';
import { authMiddleware } from './middleware/auth';
import { env } from './env';

export const app = express();

app.use(
  cors({
    origin: env.APP_BASE_URL,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

// Better Auth needs the raw request body, so mount its handler before express.json().
app.all('/api/auth/*splat', toNodeHandler(auth));
app.use(express.json());

app.get('/', (_req, res) => res.json({ message: 'API is running' }));
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.use('/api', authMiddleware);
app.get('/api/hello', (_req, res) => res.json({ msg: 'Hello from server' }));
app.get('/api/users', (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
      data: null,
      error: null,
    });
  }

  return res.json({
    success: true,
    message: 'User profile retrieved successfully',
    data: req.user,
    error: null,
  });
});

app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error);
  res.status(500).json({ message: 'Internal server error' });
});

export { env };
