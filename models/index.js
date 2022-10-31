// const Comments = require("./Comments")
const User = require("./User")
const Games = require("./Games")
const Usergames = require("./Usergames")
const UserInput = require("./userInput")


// Categories have many Products
User.belongsToMany(Games, {
  through: {model: Usergames,
    unique: false},});

Games.belongsToMany(User, {
  through: {model: Usergames,
  unique: false},
});

UserInput.belongsTo(User, {
  foreignKey: "user_id"
})

User.hasOne(UserInput, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
})


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
  Games,
  User,
  Usergames
  };