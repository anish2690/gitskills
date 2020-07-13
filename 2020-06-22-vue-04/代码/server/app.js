const Koa = require('koa')
const KoaRouter = require('koa-router')


const app = new Koa();
const router = new KoaRouter();

router.get('/', async ctx => {
    ctx.body = 'Hello Koa';
});

app.use(router.routes());


app.listen(9999);