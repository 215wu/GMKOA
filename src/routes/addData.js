const userCon = require("../controllers/userController");
const router = require("koa-router")();


router.post("/userData",userCon.signupNewUser);

module.exports = router;