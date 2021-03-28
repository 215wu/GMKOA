const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    userId: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    userPwd: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    userEmail: {
      type: DataTypes.STRING(60),
      allowNull: false
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
