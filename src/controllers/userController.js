const user = require("../models/userModel.js");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");


const getUserInfo = async function(ctx) {
  if(ctx.params.id){
    const id = ctx.params.id;
    const result = await user.getUserById(id);
    ctx.body = result;
  }else{
    const result = await user.getUserById();
    ctx.body = result;
  }
 
};

const vertifyUserLogin = async function(ctx){
  const email = ctx.request.body.email;
  const pwd = ctx.request.body.pwd;
  //console.log("email:"+email+"\npwd:"+pwd);
  const userInfo = await user.getUserByEmail(email);
  //console.log("登陆返回userInfo:",userInfo);
  //处理userInfo 决定返回响应信息是什么
  if(userInfo){
    //有该邮箱则比较确认密码
    if(bcryptjs.compareSync(pwd , userInfo.userPwd)){
      //登录密码正确
      ctx.body = {
        flag: true,
        userData: {
          ...(userInfo.dataValues),
          userPwd:"不可见",
          token :jwt.sign({
            id:userInfo.userId,
            email:userInfo.userEmail
          },"215GM-User")
        }
      };
    }else{
      ctx.body = {
        flag: false,
        info:"密码错误！"
      };
    }
  }else{
    //用户不存在
    ctx.body = {
      flag: false,
      info:"用户不存在！"
    };
  }
  
};

const signupNewUser = async function(ctx){
  console.log("signupNewUser");
  const data = ctx.request.body;
  const userInfo = await user.getUserByEmail(data.userEmail);
  if(!userInfo){
    console.log("signupNewUser to");
    const userInfo = await user.insertNewUser(data);
    ctx.body = {
      flag:1
    }
  }else{
    ctx.body = {
      flag : 2,
      msg : "该邮箱已有用户使用！"
    }
  }
}


const  updateUserInfo = async function(ctx){
  console.log("updateUserBy:",ctx.request.body.userId);
  const userInfo = await user.updateUserInfoById(ctx.request.body);
  console.log("AfterUpdate:",userInfo)
  if(userInfo){
    ctx.body = {
      flag:1,
      userData:{
        ...(userInfo.dataValues),
        userPwd:"不可见",
        token:userInfo.dataValues.userPwd
      }
    }
  }else{
    ctx.body = {
      flag:0
    }
  }
  
}

const deleteUserInfo = async function(ctx){
  console.log("deleteUserByUserId:",ctx.request.body.userId);
  const value = await user.deleteUserInfo(ctx.request.body.userId);
  if(value){
      ctx.body={
        flag:true
      }
  }else{
      ctx.body={
        flag:false
      }
  }
}

const searchUserInfo = async function(ctx){
  const userInfo = await user.searchUserInfo(ctx.request.body.searchStr);
  //console.log(userInfo);
  if(userInfo){
    ctx.body = {
      flag:true,
      userData:userInfo
    }
  }else{
    ctx.body = {
      flag:false
    }
  }
}
module.exports = {
  getUserInfo,
  vertifyUserLogin,
  signupNewUser,
  updateUserInfo,
  deleteUserInfo,
  searchUserInfo
};