const gym = require("../models/gymModel.js");


const getGymInfo = async function(ctx) {
  
    const result = await gym.getGymInfo();
    ctx.body = result;
 
};

const searchGymInfo = async function(ctx){
  const result = await gym.searchGymInfo(ctx.request.body.searchStr);
  ctx.body = result;
}
module.exports = {
  getGymInfo,
  searchGymInfo
};