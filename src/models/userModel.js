const Sequelize = require('sequelize');
const {DataTypes} = require('sequelize');
const bcryptjs =require("bcryptjs");
const db = require("../config/database.js");
const userModel = require("../table/User.js");
const Gm215wu = db.Gm215wu;

const User = userModel(Gm215wu,DataTypes);// 
const Op = Sequelize.Op;

const getUserById = async function(id=null) {
  if(id){
    console.log("findOne");

    const userInfo = await User.findOne({
      where: {
        userId: id
      }
    });
    //console.log("userInfo:"+userInfo);
    return userInfo;
  }else{
    console.log("findAll");
    const userData = await User.findAll();
   // console.log(userData);
    return userData;
  }
  
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
  console.log("insert beginning!",data);

  const tempPwd = bcryptjs.hashSync(data.userPwd, 10);
  console.log(tempPwd);
  const userInfo = await User.create({
    ...data,
    userPwd: tempPwd
  }).catch(err => {
    console.log("Error in insertNewUser:", err);
  });
  return userInfo;
}

const updateUserInfoById = async function(data){
  //console.log("updateUserInfoById",data);
   await User.update({
    userEmail:data.userEmail,
    userName:data.userName,
    type:data.type,
    sex:data.sex,
    phone:data.phone,
    address:data.address,
    answer:data.answer,
    question:data.question
  },{
    where:{
      userId:data.userId
    }
  }).catch(err => {
    console.log("更新用户数据错误", err);
  });

  const updateInfo = await User.findOne({
    where: {
      userId: data.userId
    }
  });

  return updateInfo;
}

const deleteUserInfo = async function(id){
    const value = await User.destroy({
      where:{
        userId:id
      }
    }).catch(err=>{
      console.log("删除失败",err);
    })
    console.log("value",value);
    return value;
}

const searchUserInfo = async function(str){
  console.log("str",str);
  const userInfo = await User.findAll({
    where: {
      [Op.or]: [
        {
          userName: {
            [Op.like]: "%" + str + "%"
          }
        },
        {
          userEmail: {
            [Op.like]: "%" + str + "%"
          }
        },
        {
          phone: {
            [Op.like]: "%" + str + "%"
          }
        },
        {
          address: {
            [Op.like]: "%" + str + "%"
          }
        }
      ]
    }
  }).catch(err => {
    console.log("查找用户信息有误", err);
  });
  //console.log(userInfo);
  return userInfo;
}
module.exports = {
  getUserById,
  getUserByEmail,
  insertNewUser,
  updateUserInfoById,
  deleteUserInfo,
  searchUserInfo
};