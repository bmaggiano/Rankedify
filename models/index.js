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

// Tags belongToMany Products (through ProductTag)
// User.hasMany(Games, {
//   through: Usergames,
//   foreignKey: 'game_id',
// });

// Products belongToMany Tags (through ProductTag)
// Games.belongsToMany(User, {
//   through: Usergames,
//   foreignKey: 'user_id',
// });

module.exports = {
  // Comments,  
  Games,
  User,
  Usergames
  };