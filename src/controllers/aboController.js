const about = require("../models/aboModel");


const getAboInfo = async function(ctx) {
  
    const result = await about.getAboInfo();
    ctx.body = result;
 
};
module.exports = {
  getAboInfo
};