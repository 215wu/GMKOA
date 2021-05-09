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

  //处理userInfo 决定返回响应信息是什么
  if(userInfo != null){
    //有该邮箱则比较确认密码
    if(bcryptjs.compareSync(pwd , userInfo.userPwd)){
      //登录密码正确
      ctx.body = {
        status: true,
        id: userInfo.userId,
        token :jwt.sign({
          id:userInfo.userId,
          email:userInfo.userEmail
        },"215GM-User")
      };
    }else{
      ctx.body = {
        status: false,
        msg: "密码错误！"
      };
    }
  }else{
    //用户不存在
    ctx.body = {
      status: false,
      msg: "用户不存在！"
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
  const userFlag = await user.updateUserInfoById(ctx.request.body);
  if(userFlag){
    ctx.body = {
      flag:1
    }
  }else{
    ctx.body = {
      flag:0
    }
  }
  
}
module.exports = {
  getUserInfo,
  vertifyUserLogin,
  signupNewUser,
  updateUserInfo
};