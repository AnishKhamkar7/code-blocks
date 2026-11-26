# Turborepo + Express + Vite + Better Auth

A reusable Bun and Turborepo starter with a React/Vite client, an Express API, Google sign-in through Better Auth, and Prisma with PostgreSQL.

## Workspace layout

- `apps/client`: React, Vite, TanStack Router, and TanStack Query
- `apps/server`: Express server entry point
- `packages/express`: Express API, Better Auth configuration, Prisma client, and database schema
- `packages/eslint-config`: shared ESLint configuration

## Getting started

1. Install [Bun](https://bun.sh/) and Docker.
2. Copy `apps/server/.env.example` to `apps/server/.env` and fill in the database and Google OAuth settings.
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

5. Start the client and API:

   ```sh
   bun run dev
   ```

The Vite dev server proxies `/api` to `http://localhost:3000`. The client runs on port `5173` by default.

## Environment

Set these values in `apps/server/.env`:

```dotenv
PORT=3000
NODE_ENV=development
APP_BASE_URL=http://localhost:5173
DATABASE_URL=postgresql://manmade:manmade@localhost:5433/fitdb?schema=public
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_TRUSTED_ORIGINS=http://localhost:5173
BETTER_AUTH_SECRET=replace-with-a-long-random-secret
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

Register `http://localhost:3000/api/auth/callback/google` as a Google OAuth redirect URI.

