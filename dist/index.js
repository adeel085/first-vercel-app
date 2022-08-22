import 'dotenv/config';
import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/error', async ctx => {
  ctx.status = 500;
  throw new Error('This is a test error');
});

router.get('/', ctx => {
  ctx.body = "Hello Vercel";
});

// app.use(sentryMiddleware);
app.use(router.routes());
app.listen(process.env.PORT);
