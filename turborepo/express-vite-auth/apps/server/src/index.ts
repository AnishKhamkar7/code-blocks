import { app, env } from '@starter/express';

app.listen(Number(env.PORT), () => {
  console.log(`API listening on http://localhost:${env.PORT}`);
});
