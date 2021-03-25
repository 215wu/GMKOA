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
