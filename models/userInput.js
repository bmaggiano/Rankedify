const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class UserInput extends Model { }

UserInput.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        game_input_one: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        game_input_two: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        game_input_three: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        game_input_four: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        game_input_five: {
        type: DataTypes.STRING,
        allowNull: false,
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
        modelName: 'user_input',
      }
);
module.exports = UserInput;