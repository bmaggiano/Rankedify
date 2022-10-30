const router = require('express').Router();
const { Usergames, Games, User } = require('../models/');
const seedGames = require('../seed/gameSeeds');
// const withAuth = require('../utils/auth');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
            loggedIn: req.session.loggedIn
        })
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


//incomplete, need to change this res.render to actual handlebars
router.get('/list', withAuth, async (req, res) => {
    try {
        const listData = await User.findAll({
            include: [{ model: Games, through: Usergames }]
        });

        if (!listData) {
            res.status(404).json({ message: 'No games found with that id!' });
            return;
        }
        const list = await listData.map((listItem) => listItem.get({ plain: true }))

        // res.status(200).json(listData)
        res.render('userProfile', {
            list,
            loggedIn: req.session.loggedIn
        })


    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
});

router.get('/list/:id', withAuth, async (req, res) => {
    try {
        const listData = await User.findByPk(req.params.id, {
            include: [
                {
                    model: Games,
                    through: Usergames,
                    attributes: ["game_name"]
                }],
        });
        if (!listData) {
            res.status(404).json({ message: 'No list associated with this user!' });
            return;
        }

        const list = listData.get({ plain: true });


        res.render('userProfile', {
            list,
            loggedIn: req.session.loggedIn,
        })

    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
});

router.get('/signup', async (req, res) => {
    try {
        res.render('signup')

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/master', async (req, res) => {
    try {

    } catch {

    }
});

router.get('/userinput', async (req, res) => {
    try {
        res.render('userListInput', {
            loggedIn: req.session.loggedIn
        })
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/aboutus', async (req, res) => {
    try {
        res.render('aboutUs', {
            loggedIn: req.session.loggedIn
        })
    } catch (err) {
        res.status(500).json(err);
    }
});







module.exports = router;