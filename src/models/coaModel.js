const {DataTypes} = require('sequelize');
const db = require("../config/database.js");
const coaModel = require("../table/Coach");
const Gm215wu = db.Gm215wu;

const Coa = coaModel(Gm215wu,DataTypes);// 

const getCoaInfo = async function() {
 
   
    console.log("findAllCoa");
    const coaData = await Coa.findAll();
   // console.log(userData);
    return coaData;
  
  
};

module.exports = {
  getCoaInfo
};