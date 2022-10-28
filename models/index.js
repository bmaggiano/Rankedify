// const Comments = require("./Comments")
const User = require("./User")
const Games = require("./Games")
const Usergames = require("./Usergames")


// Categories have many Products
User.belongsToMany(Games, {
  foreignKey: 'user_id',
  through: {model: Usergames,
    unique: false},});

Games.belongsToMany(User, {
  through: {model: Usergames,
  unique: false},
  foreignKey: 'user_id',
});

Games.belongsToMany(User, {
  through: Usergames,
  foreignKey: 'user_id',
});

User.belongsToMany(Games, {
  through: Usergames,
  foreignKey: 'game_id',
});

module.exports = {
  Comments,  
  Games,
  User,
  Usergames
  };