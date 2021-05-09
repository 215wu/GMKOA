const userCon = require("../controllers/userController");
const router = require("koa-router")();


router.post("/userData",userCon.updateUserInfo);

module.exports = router;