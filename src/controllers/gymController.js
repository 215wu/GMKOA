const gym = require("../models/gymModel.js");


const getGymInfo = async function(ctx) {
  
    const result = await gym.getGymInfo();
    ctx.body = result;
 
};
module.exports = {
  getGymInfo
};