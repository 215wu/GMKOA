const Sequelize = require('sequelize');
const {DataTypes,Op} = require('sequelize');
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

const searchCourseInfo = async function(str){
    const couData = await Cou.findAll({
      where: {
        [Op.or]: [
          {
            coName: {
              [Op.like]: "%" + str + "%"
            }
          },
          {
            plan: {
              [Op.like]: "%" + str + "%"
            }
          },
          {
            period: {
              [Op.like]: "%" + str + "%"
            }
          },
          {
            introduce: {
              [Op.like]: "%" + str + "%"
            }
          }
        ]
      }
    }).catch(err=>{
      console.log("查找课程有误！",err);
    });
    return couData;
}

module.exports = {
  getCouInfo,
  searchCourseInfo
};