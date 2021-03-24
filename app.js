const Koa = require("koa");
const json = require("koa-json");
const logger = require("koa-logger");
const KoaRouter = require("koa-router");
const parser = require("koa-bodyparser");
const auth = require("./src/routes/auth.js");

const app = new Koa();
const router = new KoaRouter();


app.use(json());
app.use(parser());
app.use(logger());

router.get("/auth", auth.router);// 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。

app.use(router.routes()).use(router.allowedMethods());// 将路由规则挂载到Koa上。


app.listen(3002, () => console.log("----------Server Started----------"));

module.exports = app;