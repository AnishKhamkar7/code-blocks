# Turborepo + Hono + Vite + Better Auth

A reusable Bun/Turborepo starter with a React/Vite client, Hono API, Google sign-in through Better Auth, and Prisma with PostgreSQL.

## Workspace layout

- `apps/client`: React, Vite, TanStack Router, and TanStack Query
- `apps/server`: Bun server entry point
- `packages/hono`: Hono API, Better Auth configuration, Prisma client, and database schema
- `packages/eslint-config`: shared ESLint configuration

## Getting started

1. Install [Bun](https://bun.sh/) and Docker.
2. Copy `apps/server/.env.example` to `apps/server/.env` and add your Google OAuth credentials.
3. Install dependencies and start PostgreSQL:

   ```sh
   bun install
   docker compose up -d
   ```

4. Generate Prisma and apply migrations:

   ```sh
   bun run db:generate
   bun run db:deploy
   ```

5. Start the API and client:

   ```sh
   bun run dev
   ```

The Vite dev server proxies `/api` to `http://localhost:3000`. Register `http://localhost:3000/api/auth/callback/google` as a Google OAuth redirect URI.
