const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = new Koa();
const router = new Router();

app.prepare()
    .then(() => {
        router.get('*', async ctx => {
            await handle(ctx.req, ctx.res);
            ctx.respond = false;
        });

        server.use(async (ctx, next) => {
            ctx.res.statusCode = 200;
            await next();
        });

        server.use(router.routes());
        server.listen(port, () => {
            console.log(`>>> Server listening on http://localhost:${port}`);
        });
    });
