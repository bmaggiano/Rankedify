const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Usergames extends Model {}

Usergames.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id"
      }
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "game",
        key: "id"
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_games',
  }
);

module.exports = Usergames;