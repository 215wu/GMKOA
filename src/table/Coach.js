const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Coach', {
    cId: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    cName: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    cEmail: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    cPwd: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    sex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    keywords: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    imgUrl: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "taoxiang.png"
    },
    introImg1: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "introduce1.png"
    },
    introImg2: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "introduce2.png"
    },
    introduce: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Coach',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cId" },
        ]
      },
    ]
  });
};
