const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('About', {
    abId: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    abTitle: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    uploaderNo: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Admin',
        key: 'aId'
      }
    }
  }, {
    sequelize,
    tableName: 'About',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "abId" },
        ]
      },
      {
        name: "uploaderNo",
        using: "BTREE",
        fields: [
          { name: "uploaderNo" },
        ]
      },
    ]
  });
};
