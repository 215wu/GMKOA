const admin = require("../models/adminModel");
const bcryptjs = require("bcryptjs");

const getAdminInfo = async function(ctx) {
  const id = ctx.params.aId;// 获取url里传过来的参数里的id
  //console.log("id:"+id);
  const result = await admin.getAdminrById(id);
  //console.log("result:"+result);
  ctx.body = result;// 将请求的结果放到response的body里返回
};

const vertifyAdminLogin = async function(ctx){
  console.log("ghhhh");
  const id = ctx.request.body.aId;
  const pwd = ctx.request.body.aPwd;
  console.log(id,pwd);
  const adminInfo = await admin.getAdminById(id);
  //处理userInfo 决定返回响应信息是什么
  if(adminInfo != null){
    //有该邮箱则比较确认密码
    if(bcryptjs.compareSync(pwd , adminInfo.aPwd)){
      //登录密码正确
      ctx.body = {
        flag: 0,
        aId: adminInfo.aId,
      };
    }else{
      ctx.body = {
        flag: 2
      };
    }
  }else{
    //用户不存在
    ctx.body = {
      flag: 1
    };
  }
  
};

const addNewAdmin = async function(ctx){
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
  getAdminInfo,
  vertifyAdminLogin,
  addNewAdmin
};