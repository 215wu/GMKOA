const auth = require("../controllers/userController.js");
const authAdmin = require("../controllers/adminController.js");
const router = require("koa-router")();

//User
router.get("/user/:id", auth.getUserInfo);
router.post("/login", auth.vertifyUserLogin);
router.post("/signup", auth.signupNewUser);

//Admin
router.post("/adminLogin",authAdmin.vertifyAdminLogin);

module.exports = router;