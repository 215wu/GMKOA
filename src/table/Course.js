const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Course', {
    coId: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    coName: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    plan: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    period: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    coachNo: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Coach',
        key: 'cId'
      }
    },
    roomNo: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Room',
        key: 'rId'
      }
    },
    introduce: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Course',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "coId" },
        ]
      },
      {
        name: "coachNo",
        using: "BTREE",
        fields: [
          { name: "coachNo" },
        ]
      },
      {
        name: "roomNo",
        using: "BTREE",
        fields: [
          { name: "roomNo" },
        ]
      },
    ]
  });
};
