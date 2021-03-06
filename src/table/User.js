const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    userId: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    userEmail: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    userPwd: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    nicName: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: "注册会员"
    },
    imgUrl: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "taoxiang.png"
    },
    sex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    address: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    question: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    answer: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'User',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userId" },
        ]
      },
    ]
  });
};
