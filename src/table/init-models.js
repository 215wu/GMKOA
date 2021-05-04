var DataTypes = require("sequelize").DataTypes;
var _About = require("./About");
var _Admin = require("./Admin");
var _BookRe = require("./BookRe");
var _Coach = require("./Coach");
var _Course = require("./Course");
var _Gymcenter = require("./Gymcenter");
var _Machine = require("./Machine");
var _Notify = require("./Notify");
var _PurchaseRe = require("./PurchaseRe");
var _Room = require("./Room");
var _User = require("./User");

function initModels(sequelize) {
  var About = _About(sequelize, DataTypes);
  var Admin = _Admin(sequelize, DataTypes);
  var BookRe = _BookRe(sequelize, DataTypes);
  var Coach = _Coach(sequelize, DataTypes);
  var Course = _Course(sequelize, DataTypes);
  var Gymcenter = _Gymcenter(sequelize, DataTypes);
  var Machine = _Machine(sequelize, DataTypes);
  var Notify = _Notify(sequelize, DataTypes);
  var PurchaseRe = _PurchaseRe(sequelize, DataTypes);
  var Room = _Room(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);

  About.belongsTo(Admin, { as: "uploaderNo_Admin", foreignKey: "uploaderNo"});
  Admin.hasMany(About, { as: "Abouts", foreignKey: "uploaderNo"});
  Notify.belongsTo(Admin, { as: "uploaderNo_Admin", foreignKey: "uploaderNo"});
  Admin.hasMany(Notify, { as: "Notifies", foreignKey: "uploaderNo"});
  Course.belongsTo(Coach, { as: "coachNo_Coach", foreignKey: "coachNo"});
  Coach.hasMany(Course, { as: "Courses", foreignKey: "coachNo"});
  PurchaseRe.belongsTo(Course, { as: "courseNo_Course", foreignKey: "courseNo"});
  Course.hasMany(PurchaseRe, { as: "PurchaseRes", foreignKey: "courseNo"});
  BookRe.belongsTo(Gymcenter, { as: "gymcenterNo_Gymcenter", foreignKey: "gymcenterNo"});
  Gymcenter.hasMany(BookRe, { as: "BookRes", foreignKey: "gymcenterNo"});
  Machine.belongsTo(Gymcenter, { as: "gymcenterNo_Gymcenter", foreignKey: "gymcenterNo"});
  Gymcenter.hasMany(Machine, { as: "Machines", foreignKey: "gymcenterNo"});
  Room.belongsTo(Gymcenter, { as: "gymcenterNo_Gymcenter", foreignKey: "gymcenterNo"});
  Gymcenter.hasMany(Room, { as: "Rooms", foreignKey: "gymcenterNo"});
  Course.belongsTo(Room, { as: "roomNo_Room", foreignKey: "roomNo"});
  Room.hasMany(Course, { as: "Courses", foreignKey: "roomNo"});
  BookRe.belongsTo(User, { as: "userNo_User", foreignKey: "userNo"});
  User.hasMany(BookRe, { as: "BookRes", foreignKey: "userNo"});
  PurchaseRe.belongsTo(User, { as: "userNo_User", foreignKey: "userNo"});
  User.hasMany(PurchaseRe, { as: "PurchaseRes", foreignKey: "userNo"});

  return {
    About,
    Admin,
    BookRe,
    Coach,
    Course,
    Gymcenter,
    Machine,
    Notify,
    PurchaseRe,
    Room,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
