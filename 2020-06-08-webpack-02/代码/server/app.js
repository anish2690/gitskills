const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

router.get('/getUser', async ctx => {
    ctx.body = 'Hello API';
});

app.use(router.routes());


app.listen(9999);