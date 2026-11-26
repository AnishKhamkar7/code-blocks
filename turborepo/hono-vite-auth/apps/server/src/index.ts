import { app, env } from '@starter/hono';

export default {
  port: env.PORT,
  fetch: app.fetch,
};
