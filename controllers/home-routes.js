const router = require('express').Router();
const { Usergames, Games, User } = require('../models/');
const seedGames = require('../seed/gameSeeds');

router.get('/', async (req, res) => {
    try {
        res.render('homepage')
    } catch {
        res.status(500).json(err);
    }
});

// router.get('/userP')

router.get('/login', async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/user-profile', async (req, res) => {
//     try {
//         res.render('userProfile')
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


//incomplete, need to change this res.render to actual handlebars
router.get('/list', async (req, res) => {
    try {
        const listData = await User.findAll({
            include: [{model: Games, through: Usergames}]
        });

        if (!listData) {
            res.status(404).json({ message: 'No games found with that id!' });
            return;  
        }
        const list = await listData.map((listItem) => listItem.get({plain:true}))

        res.status(200).json(listData)

        // res.render('', {
        //     list
        // })
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
});

router.get('/list/:id', async (req, res) => {
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
                logged_in: req.session.logged_in,
            })
            // res.status(200).json(listData)

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





module.exports = router;