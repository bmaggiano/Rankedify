// const Comments = require("./Comments")
const User = require("./User")
const Games = require("./Games")
const Usergames = require("./Usergames")


// Categories have many Products
User.belongsToMany(Games, {
  through: {model: Usergames,
    unique: false},});

Games.belongsToMany(User, {
  through: {model: Usergames,
  unique: false},
});

<<<<<<< HEAD
// Games.belongsToMany(User, {
//   through: Usergames,
//   foreignKey: 'user_id',
// });

// User.belongsToMany(Games, {
//   through: Usergames,
//   foreignKey: 'game_id',
// });
=======

// User.hasMany(Games, {
//   through: Usergames,
//   foreignKey: 'game_id',
// });

// Games.belongsToMany(User, {
//   through: Usergames,
//   foreignKey: 'user_id',
// });

>>>>>>> 7c367824fa120b021914dd68ca5ffdbbd14420c1

module.exports = {
  // Comments,  
  Games,
  User,
  Usergames
  };