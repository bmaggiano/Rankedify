const sequelize = require('../config/connection');
const { Games } = require('../models');
const seedGames = require('./gameSeeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedGames()
    .then(async data => {
        console.log(data)
        await Games.bulkCreate(data);
    })
    process.exit(0);
  };
  
  seedAll();
