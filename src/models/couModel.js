const {DataTypes} = require('sequelize');
const db = require("../config/database.js");
const couModel = require("../table/Course");
const Gm215wu = db.Gm215wu;

const Cou = couModel(Gm215wu,DataTypes);// 

const getCouInfo = async function() {
 
   
    console.log("findAllCourse");
    const couData = await Cou.findAll();
   // console.log(userData);
    return couData;
  
  
};

module.exports = {
  getCouInfo
};