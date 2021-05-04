const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BookRe', {
    brId: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    gymcenterNo: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Gymcenter',
        key: 'gId'
      }
    },
    userNo: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'User',
        key: 'userId'
      }
    },
    period: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    bookBill: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    restBill: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'BookRe',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "brId" },
        ]
      },
      {
        name: "gymcenterNo",
        using: "BTREE",
        fields: [
          { name: "gymcenterNo" },
        ]
      },
      {
        name: "userNo",
        using: "BTREE",
        fields: [
          { name: "userNo" },
        ]
      },
    ]
  });
};
