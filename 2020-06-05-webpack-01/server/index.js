const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get("/getData", async (ctx) => {
    ctx.body = "12312312312321"
}
)

router.post("/login", async (ctx) => {
    ctx.body = "登录成功"
}
)

app.use(router.routes());

app.listen(8888, () => {
    console.log("localhost:8888")
}
)