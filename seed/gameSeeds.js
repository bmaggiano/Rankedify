const { Games } = require('../models');
const axios = require('axios')

const apiKey = "4f2e66247d4b4fe186bf66bfd9c030b9"
const apiUrlPage1 = `https://api.rawg.io/api/games?page_size=40&page=1&key=${apiKey}`
const apiUrlPage2 = `https://api.rawg.io/api/games?page_size=40&page=2&key=${apiKey}`
const apiUrlPage3 = `https://api.rawg.io/api/games?page_size=40&page=3&key=${apiKey}`
const apiUrlPage4 = `https://api.rawg.io/api/games?page_size=40&page=4&key=${apiKey}`
const apiUrlPage5 = `https://api.rawg.io/api/games?page_size=40&page=5&key=${apiKey}`
const apiUrlPage6 = `https://api.rawg.io/api/games?page_size=40&page=6&key=${apiKey}`
const apiUrlPage7 = `https://api.rawg.io/api/games?page_size=40&page=7&key=${apiKey}`
const apiUrlPage8 = `https://api.rawg.io/api/games?page_size=40&page=8&key=${apiKey}`
const apiUrlPage9 = `https://api.rawg.io/api/games?page_size=40&page=9&key=${apiKey}`
const apiUrlPage10 = `https://api.rawg.io/api/games?page_size=40&page=10&key=${apiKey}`

const urls = [apiUrlPage1, apiUrlPage2, apiUrlPage3, apiUrlPage4, apiUrlPage5, apiUrlPage6, apiUrlPage7, apiUrlPage8, apiUrlPage9, apiUrlPage10];

const blankArr = []
const gamesArr = []
// console.log(apiUrlPage1)
const seedGames = async () => {
    const arrayOfResponses = await Promise.all(
        urls.map((url) =>
            axios.get(url)
                // .then((data) => (data.data.results))
        )
    );
// console.log(arrayOfResponses)
blankArr.push(...arrayOfResponses[0].data.results, ...arrayOfResponses[1].data.results, ...arrayOfResponses[2].data.results, ...arrayOfResponses[3].data.results, ...arrayOfResponses[4].data.results, ...arrayOfResponses[5].data.results, ...arrayOfResponses[6].data.results, ...arrayOfResponses[7].data.results, ...arrayOfResponses[8].data.results, ...arrayOfResponses[9].data.results)
// console.log(blankArr);
for (let i=0; i<blankArr.length; i++) {
    const name = {game_name: `${blankArr[i].name}`};
    gamesArr.push(name);
}
// console.log(gamesArr)
return await gamesArr;
};

module.exports = seedGames;
