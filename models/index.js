const Comments = require("./Comments")
const Games = require("./Games")
const User = require("./User")
const Usergames = require("./Usergames")

Usergames.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

// Categories have many Products
User.hasMany(Usergames, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

// Products belongToMany Tags (through ProductTag)
Games.belongsToMany(User, {
  through: Usergames,
  foreignKey: 'user_id',
});
// Tags belongToMany Products (through ProductTag)
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