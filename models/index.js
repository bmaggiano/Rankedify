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


module.exports = {
  Games,
  User,
  Usergames
};