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
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'user_id',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'game_id',
});

module.exports = {
  Comments,  
  Games,
  User,
  Usergames
  };