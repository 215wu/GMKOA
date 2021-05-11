const {DataTypes,Op} = require('sequelize');
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

const searchGymInfo = async function(str){
  const gymData = await Gym.findAll({
    where: {
      [Op.or]: [
        {
          gName: {
            [Op.like]: "%" + str + "%"
          }
        },
        {
          size: {
            [Op.like]: "%" + str + "%"
          }
        },
        {
          location: {
            [Op.like]: "%" + str + "%"
          }
        },
        {
          introduce: {
            [Op.like]: "%" + str + "%"
          }
        },
        {
          price: {
            [Op.like]: "%" + str + "%"
          }
        }
      ]
    }
  }).catch(err=>{
    console.log("查找健身中心有误！",err);
  });
  return gymData;
}
module.exports = {
  getGymInfo,
  searchGymInfo
};