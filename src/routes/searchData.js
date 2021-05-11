const userCon = require("../controllers/userController");
const couCon = require("../controllers/couController");
const gymCon = require("../controllers/gymController");
const router = require("koa-router")();


router.post("/userData",userCon.searchUserInfo);
router.post("/courseData",couCon.searchCourseInfo);
router.post("/gymData",gymCon.searchGymInfo);

module.exports = router;