const userCon = require("../controllers/userController");
//const adminCon = require("../controllers/adminController.js");
const router = require("koa-router")();


router.post("/userData",userCon.deleteUserInfo);

module.exports = router;