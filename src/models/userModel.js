const {DataTypes} = require('sequelize');
const bcryptjs =require("bcryptjs");
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
  //console.log("vertify beginning!");
  const userInfo = await User.findOne({
    where: {
      userEmail : email
    }
  });
  return userInfo;

}

const insertNewUser = async function(data){
  console.log("insert beginning!");
  const tempPwd = bcryptjs.hashSync(data.pwd, 10);
  console.log(tempPwd);
  const userInfo = await User.create({
    userName: data.name,
    userPwd: tempPwd,
    userEmail: data.email
  }).catch(err => {
    console.log("Error in insertNewUser:", err);
  });
  return userInfo;
}

module.exports = {
  getUserById,
  getUserByEmail,
  insertNewUser
};