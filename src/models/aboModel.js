const {DataTypes} = require('sequelize');
const db = require("../config/database.js");
const aboModel = require("../table/About");
const Gm215wu = db.Gm215wu;

const Abo = aboModel(Gm215wu,DataTypes);// 

const getAboInfo = async function() {
 
   
    console.log("findAllAbout");
    const aboData = await Abo.findAll();
   // console.log(userData);
    return aboData;
  
  
};

module.exports = {
  getAboInfo
};