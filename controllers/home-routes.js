const router = require('express').Router();
const { Usergames, Games, User } = require('../models/');
const UserInput = require('../models/userInput');
const seedGames = require('../seed/gameSeeds');
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

router.get('/list', async (req, res) => {
    try {
        const listData = await User.findAll({
            include: [
                {
                    model: UserInput,
                }],
        });

        if (!listData) {
            res.status(404).json({ message: 'No games found with that id!' });
            return;
        }
        const list = await listData.map((listItem) => listItem.get({ plain: true }))


        res.render('allList', {
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
        const listData = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: UserInput,
                    attributes: ["game_input_one",
                        "game_input_two", "game_input_three", "game_input_four", "game_input_five"]
                }],
        });
        if (!listData) {
            res.status(404).json({ message: 'No list associated with this user!' });
            return;
        }

        const list = listData.get({ plain: true });
        console.log(list)

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

router.get('/toppicks', async (req, res) => {
    try {
        res.render('masterList', {
            loggedIn: req.session.loggedIn
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;