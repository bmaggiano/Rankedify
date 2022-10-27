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

const urls = [apiUrlPage1, apiUrlPage2, apiUrlPage3, apiUrlPage4, apiUrlPage5, apiUrlPage6, apiUrlPage7, apiUrlPage8, apiUrlPage9, apiUrl10];



const arrayOfResponses = await Promise.all(
    urls.map((url) =>
        fetch(url)
            .then((res) => res.json())
             .then((data) => (data.results))
    )
);


blankArr = []
blankArr.push(...arrayOfResponses[0], ...arrayOfResponses[1], ...arrayOfResponses[2], ...arrayOfResponses[3], ...arrayOfResponses[4], ...arrayOfResponses[5], ...arrayOfResponses[6], ...arrayOfResponses[7], ...arrayOfResponses[8], ...arrayOfResponses[9])

const gamesArr = []

for (let i=0; i<blankArr.length; i++) {
    const name = {name: `${blankArr[i].name}`,
                 image: `${blankArr[i].background_image}`};
    gamesArr.push(name);
}

console.log(gamesArr)
