const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get("/getData", async (ctx) => {
    ctx.body = "index-1 to server OK"
}
)

router.post("/login", async (ctx) => {
    ctx.body = "index-1 to server login OK"
}
)

app.use(router.routes());

app.listen(8889, () => {
    console.log("localhost:8889")
}
)