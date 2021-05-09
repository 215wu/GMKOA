const userCon = require("../controllers/userController");
const gymCon = require("../controllers/gymController");
//const adminCon = require("../controllers/adminController.js");
const router = require("koa-router")();


router.post("/userData",userCon.getUserInfo);
router.post("/gymData",gymCon.getGymInfo);
//router.post("/adminData", adminCon.getAdminInfo);

module.exports = router;