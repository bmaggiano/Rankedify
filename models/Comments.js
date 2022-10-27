const { Model, DataTypes } = require('sequelize');
const { Comments } = require('.');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    comment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id"
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);

module.exports = Comments;