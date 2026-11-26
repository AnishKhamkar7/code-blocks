import { createHonoClient } from '@starter/hono/client';
import type { AppType } from '@starter/hono/app-type';

const apiBaseUrl = import.meta.env.VITE_API_URL;

export const client = createHonoClient<AppType>(apiBaseUrl);
