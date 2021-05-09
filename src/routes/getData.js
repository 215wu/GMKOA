const userCon = require("../controllers/userController");
const gymCon = require("../controllers/gymController");
const coaCon = require("../controllers/coaController");
const aboCon = require("../controllers/aboController");
const couCon = require("../controllers/couController");
//const adminCon = require("../controllers/adminController.js");
const router = require("koa-router")();


router.post("/userData",userCon.getUserInfo);
router.post("/gymData",gymCon.getGymInfo);
router.post("/coachData",coaCon.getCoaInfo);
router.post("/aboutData",aboCon.getAboInfo);
router.post("/courseData",couCon.getCouInfo);
//router.post("/adminData", adminCon.getAdminInfo);

module.exports = router;