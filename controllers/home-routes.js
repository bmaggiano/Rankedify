const router = require('express').Router();
const Usergames = require('../models/Usergames');
const Games = require('../models/Games');
const seedGames = require('../seed/gameSeeds');

router.get('/', async (req, res) => {
    try {
        res.render('homepage')
    } catch {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/list', async (req, res) => {
    try {
        const listData = await Usergames.findAll({
            // include: [{model: Games, through: Usergames}]
        });

        if (!listData) {
            res.status(404).json({ message: 'No games found with that id!' });
            return;  
        }
        res.status(200).json(listData)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
});

router.get('/list/:id', async (req, res) => {
    try {

    } catch {

    }
});

router.get('/signup', async (req, res) => {
    try {

    } catch {

    }
});

router.get('/master', async (req, res) => {
    try {

    } catch {

    }
});





module.exports = router;