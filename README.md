 <h1 align="center">Rankedify</h1>  
<p align="center"></p>

----

## Rankedify

* This webpage is designed for users to post a list of their top 5 games, and see others top 5 list.
* Our motivation to create this project was to allow users to post their personal favorite games and compare their list with other users.
* Through the completion of this project, we furthered our understanding in working with group projects through Github.


## [Rankedify Deployed Application](https://rankedify.herokuapp.com/)

----

## Table of Contents

* [Installation](#installation)
* [User Story](#user-story)
* [Usage](#usage)
* [Desktop Demo](#desktop-demo)
* [Credits](#credits)
* [Technology Used](#technologies-used)
* [Badges](#badges)
* [Questions](#questions)
* [Tests](#tests)
* [License](#license)

----

## Installation

NPM packages installation instructions: `npm i`   
Connecting to MySQL DB: `SOURCE db/schema.sql`  
To run repository's data: `npm run seed`  
Users must also create a '.env' file in the projects repository and create four variables with the following MySQL credentials: `DB_NAME='database name'` `DB_USER='user name'` `DB_PASSWORD='SQL password'` `SECRET = 'anything'`
Users must create a '.gitignore' file in the projects repository and input `node_modules/` & `.env` to save computer storage/memory and to protect sensitive .env file information.

----

## User Story

* As a user I would like to be able to log in and sign up to Rankedify's application.   
* As a user I would like to be able to log in and create a list of my top 5 favorite video games.
* As a user I would like to see a Rankedify's Top Game list of the top ranked games on the site
* As a user I would like to see other user's favorite games list
* As a user I would like to see the creators of the site and their motivation behind creating their product. 
* As a user I would like to experience a polished UI/UX design. 

----

## Usage

Users can visit the deployed heroku app or simply run one of the commands `npm start` or `node server.js` and navigate to localhost:3001 to view the application.

----

## Desktop Demo
<img src= ""></img>

----

## Credits

* [*Brandon Maggiano*-**GitHub**](https://github.com/bmaggiano)
    * *Tasks:* Controller Folder, Routes, Seed Folder, Seeding DB, Fetching API, Public & Views Folders, Handlebars, JS, CSS Styling.
* [*Derrick Lafforthun*-**GitHub**](https://github.com/Derricklaff)
    * *Tasks:* Config, Public & Views Folders, JS, Main Handlebars, Main CSS Styling. 
* [*Luis Morales*-**GitHub**](https://github.com/Pogga1)
    * *Tasks:* Views Folder & Handlebars.
* [*Miguel Gallardo*-**GitHub**](https://github.com/magallardo77)
    * *Tasks:* Models & DB Folder, Public & Views Folders, Routes, Handlebars, JS, CSS Styling, README, Heroku Deployment.


----

## Technologies Used
* [Autocompleter](https://www.npmjs.com/package/autocompleter)
* [Axios](https://www.npmjs.com/package/axios)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Bootstrap](https://fonts.google.com/)
* [Connect Session Sequelize](https://www.npmjs.com/package/connect-session-sequelize)
* [Dontenv](https://www.npmjs.com/package/dotenv)
* [Express](https://www.npmjs.com/package/express)
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
* [Express Session](https://www.npmjs.com/package/express-session)
* [Handlebars](https://handlebarsjs.com/)
* [MySql2](https://www.npmjs.com/package/mysql2)
* [Sequilize](https://www.npmjs.com/package/sequelize)
* [Tailwind](https://tailwindcss.com/)
* Game API:
    * [API](https://url.com)


----

## Badges

* There are no badges associated with this webpage.

----

## Contact Info


If you would like to reach out, please rach out via our public Github repository and one of our creators will reply ASAP.


GitHub: [**bmaggiano**](https://github.com/bmaggiano/Rankedify)

----

## License

There are no licenses associated with this webpage.
