// const Comments = require("./Comments")
const User = require("./User")
const Games = require("./Games")
const Usergames = require("./Usergames")
const UserInput = require("./userInput")
// const Comments = require("./comments")


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

module.exports = {
  // Comments,  
  Games,
  User,
  Usergames
  };