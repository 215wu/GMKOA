const user = require("../models/userModel.js");
const bcryptjs = require("bcryptjs");

const getUserInfo = async function(ctx) {
  const id = ctx.params.id;// 获取url里传过来的参数里的id
  //console.log("id:"+id);
  const result = await user.getUserById(id);
  //console.log("result:"+result);
  ctx.body = result;// 将请求的结果放到response的body里返回
};

const vertifyUserLogin = async function(ctx){
  const email = ctx.request.body.email;
  const pwd = ctx.request.body.pwd;
  console.log("email:"+email+"\npwd:"+pwd);
  const userInfo = await user.getUserByEmail(email);

  //处理userInfo 决定返回响应信息是什么
  if(userInfo != null){
    //有该邮箱则比较确认密码
    if(bcryptjs.compareSync(pwd , userInfo.userPwd)){
      //登录密码正确
      ctx.body = {
        status: true,
        id: userInfo.userId,
        msg: "登录成功！"
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
  const userInfo = await user.getUserByEmail(data.email);
  if(!userInfo){
    console.log("signupNewUser to");
    const userInfo = await user.insertNewUser(data);
    ctx.body = {
      status : true,
      msg : "注册成功！"
    }
  }else{
    ctx.body = {
      status : false,
      msg : "该邮箱已注册！"
    }
  }
}

module.exports = {
  getUserInfo,
  vertifyUserLogin,
  signupNewUser
};