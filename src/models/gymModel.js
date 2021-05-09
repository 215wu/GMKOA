const {DataTypes} = require('sequelize');
const db = require("../config/database.js");
const gymModel = require("../table/Gymcenter");
const Gm215wu = db.Gm215wu;

const Gym = gymModel(Gm215wu,DataTypes);// 

const getGymInfo = async function() {
 
   
    console.log("findAllGym");
    const gymData = await Gym.findAll();
   // console.log(userData);
    return gymData;
  
  
};

module.exports = {
  getGymInfo
};