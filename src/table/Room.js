const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Room', {
    rId: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    rName: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    gymcenterNo: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Gymcenter',
        key: 'gId'
      }
    }
  }, {
    sequelize,
    tableName: 'Room',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rId" },
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
