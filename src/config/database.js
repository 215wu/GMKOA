const Sequelize = require("sequelize");


const Gm215wu = new Sequelize("gm_test","root","123456a?",{
  dialect: 'mysql',
  host: '121.5.51.6',
    define: {
      timestamps: false
    }
  }
);

module.exports = {
  Gm215wu 
};
