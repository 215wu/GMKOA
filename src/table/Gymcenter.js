const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gymcenter', {
    gId: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    gName: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    imgUrl: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "taoxiang.png"
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 200
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false
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
    tableName: 'Gymcenter',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gId" },
        ]
      },
    ]
  });
};
