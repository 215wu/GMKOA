const user = require("../models/userModel.js");

const getUserInfo = async function(ctx) {
  const id = ctx.params.id;// 获取url里传过来的参数里的id
  const result = await user.getUserById(id);
  ctx.body = result;// 将请求的结果放到response的body里返回
};

module.exports = {
  getUserInfo
};