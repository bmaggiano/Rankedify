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

module.exports = { 
=======
// User.hasMany(Games, {
//   through: Usergames,
//   foreignKey: 'game_id',
// });

// Games.belongsToMany(User, {
//   through: Usergames,
//   foreignKey: 'user_id',
// });


module.exports = {
  // Comments,  
>>>>>>> e4087b8c0ec115aa0dcaa871f3f8ca1263eeacd1
  Games,
  User,
  Usergames
  };