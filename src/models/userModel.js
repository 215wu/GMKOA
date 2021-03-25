const {DataTypes} = require('sequelize');
const db = require("../config/database.js");
const userModel = require("../table/User.js");
const Gm215wu = db.Gm215wu;

const User = userModel(Gm215wu,DataTypes);// 

const getUserById = async function(id) {
  const userInfo = await User.findOne({
    where: {
      UserID: id
    }
  });
  return userInfo;
};

module.exports = {
  getUserById
};