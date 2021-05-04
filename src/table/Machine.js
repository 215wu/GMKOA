const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Machine', {
    mId: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    mName: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    manufacturer: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    gymcenterNo: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Gymcenter',
        key: 'gId'
      }
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    introduce: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Machine',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mId" },
        ]
      },
      {
        name: "gymcenterNo",
        using: "BTREE",
        fields: [
          { name: "gymcenterNo" },
        ]
      },
    ]
  });
};
