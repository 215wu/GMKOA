const Sequelize = require("sequelize");


const Gm215wu = new Sequelize(
  "mysql://root:123456a?@121.5.51.6:3306/gm_test",
  {
    define: {
      timestamps: false
    }
  }
);

module.exports = {
  Gm215wu 
};
