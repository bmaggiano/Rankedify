// const Comments = require("./Comments")
const Games = require("./Games")
// const User = require("./User")
// const Usergames = require("./Usergames")


// Categories have many Products
// User.hasMany(Usergames, {
//   foreignKey: 'user_id',
//   onDelete: "CASCADE"
// });

// Usergames.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: "CASCADE"
// });

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
  // User,
  // Usergames
  };