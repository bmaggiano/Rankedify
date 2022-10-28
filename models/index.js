const Comments = require("./Comments")
const Games = require("./Games")
const User = require("./User")
const Usergames = require("./Usergames")

Usergames.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});


User.hasMany(Usergames, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
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