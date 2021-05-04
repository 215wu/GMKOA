const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Notify', {
    nId: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nTopic: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    keywords: {
      type: DataTypes.STRING(60),
      allowNull: true
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
    tableName: 'Notify',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nId" },
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
