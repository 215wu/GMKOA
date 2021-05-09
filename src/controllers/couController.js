const cou = require("../models/couModel.js");


const getCouInfo = async function(ctx) {
  
    const result = await cou.getCouInfo();
    ctx.body = result;
 
};
module.exports = {
  getCouInfo
};