const cou = require("../models/couModel.js");


const getCouInfo = async function(ctx) {
  
    const result = await cou.getCouInfo();
    ctx.body = result;
 
};

const searchCourseInfo = async function(ctx){
  const result = await cou.searchCourseInfo(ctx.request.body.searchStr);
  ctx.body = result;
}
module.exports = {
  getCouInfo,
  searchCourseInfo
};