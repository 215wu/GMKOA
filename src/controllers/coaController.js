const coach = require("../models/coaModel");


const getCoaInfo = async function(ctx) {
  
    const result = await coach.getCoaInfo();
    ctx.body = result;
 
};
module.exports = {
  getCoaInfo
};