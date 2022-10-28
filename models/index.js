// const Comments = require("./Comments")
const User = require("./User")
const Games = require("./Games")
const Usergames = require("./Usergames")


// Categories have many Products
User.belongsToMany(Games, {
  through: {
    model: Usergames,
    unique: false
  },
});

Games.belongsToMany(User, {
  through: {
    model: Usergames,
    unique: false
  },
});


<<<<<<< HEAD



module.exports = {
=======
module.exports = {
  // Comments,
>>>>>>> 1b5556709d8131b7e3bf8858f5babfad05418f81
  Games,
  User,
  Usergames
};