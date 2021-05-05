const {DataTypes} = require('sequelize');
const bcryptjs =require("bcryptjs");
const db = require("../config/database.js");
const adminModel = require("../table/Admin.js");
const Gm215wu = db.Gm215wu;

const Admin = adminModel(Gm215wu,DataTypes);// 

const getAdminById = async function(id) {
  //console.log("adminInfo:");
  const adminInfo = await Admin.findOne({
    where: {
      aId: id
    }
  });
  //console.log("adminInfo:"+adminInfo);

  return adminInfo;
};


const insertNewAdmin = async function(data){
  //console.log("insert beginning!");
  const tempPwd = bcryptjs.hashSync(data.pwd, 10);
  //console.log(tempPwd);
  const adminInfo = await Admin.create({
    aName: data.name,
    aPwd: tempPwd,
    aEmail: data.email
  }).catch(err => {
    console.log("Error in insertNewUser:", err);
  });
  return adminInfo;
}

module.exports = {
  getAdminById,
  insertNewAdmin
};