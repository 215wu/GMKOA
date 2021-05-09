const Koa = require("koa");
const json = require("koa-json");
const logger = require("koa-logger");
const KoaRouter = require("koa-router");
const parser = require("koa-bodyparser");
const auth = require("./src/routes/auth.js");
const getData = require("./src/routes/getData");
const updateData = require('./src/routes/updateData');
const addData = require('./src/routes/addData');
const deleteData = require('./src/routes/deleteData');
const searchData = require('./src/routes/searchData');

const app = new Koa();
const router = new KoaRouter();


app.use(json());
app.use(parser());
app.use(logger());

router.use("/auth",auth.routes());// 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
router.use("/getData",getData.routes());
router.use("/updateData",updateData.routes());
router.use("/addData",addData.routes());
router.use("/deleteData",deleteData.routes());
router.use("/searchData",searchData.routes());

app.use(router.routes(),router.allowedMethods());// 将路由规则挂载到Koa上。


app.listen(3002, () => console.log("----------Server Started----------"));

module.exports = app;