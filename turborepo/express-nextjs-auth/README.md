# Turborepo + Express + Next.js + Better Auth

A standalone Bun/Turborepo starter with a Next.js App Router client, Express API, Google sign-in through Better Auth, and Prisma with PostgreSQL.

## Workspace layout

- `apps/client`: Next.js App Router client with login, signup, and session-aware dashboard pages
- `apps/server`: Express server entry point
- `packages/express`: Express API, Better Auth configuration, Prisma client, and database schema
- `packages/eslint-config`: shared ESLint configuration

## Getting started

1. Install [Bun](https://bun.sh/) and Docker.
2. Copy `apps/server/.env.example` to `apps/server/.env` and fill in Google OAuth settings.
3. Install dependencies and start PostgreSQL:

   ```sh
   bun install
   docker compose up -d
   ```

4. Generate Prisma and apply the migrations:

   ```sh
   bun run db:generate
   bun run db:deploy
   ```

5. Start the API and web app:

   ```sh
   bun run dev
   ```

The Express API runs on port `3000`; Next.js runs on port `3001` and rewrites `/api/*` requests to Express. Copy `apps/client/.env.example` to `apps/client/.env.local` if you need to configure a different API URL. Set `APP_BASE_URL` to the browser-facing Next.js origin.

Register `http://localhost:3000/api/auth/callback/google` as the Google OAuth redirect URI. The default local values are in `apps/server/.env.example`.
