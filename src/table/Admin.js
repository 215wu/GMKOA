const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Admin', {
    aId: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    aEmail: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    aPwd: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    aName: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    imgUrl: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "taoxiang.png"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'Admin',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "aId" },
        ]
      },
    ]
  });
};
