const {DataTypes} = require('sequelize');
const db = require("../config/database.js");
const userModel = require("../table/User.js");
const Gm215wu = db.Gm215wu;

const User = userModel(Gm215wu,DataTypes);// 

const getUserById = async function(id) {
  //console.log("userInfo:");
  const userInfo = await User.findOne({
    where: {
      userId: id
    }
  });
  //console.log("userInfo:"+userInfo);

  return userInfo;
};

const getUserByEmail = async function(email,psw){
  console.log("vertify beginning!");
  const userInfo = await User.findOne({
    where: {
      userEmail : email
    }
  });
  return userInfo;

}

module.exports = {
  getUserById,
  getUserByEmail
};