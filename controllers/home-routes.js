const router = require('express').Router();

router.get('/', async (req, res) => {
    try {

    } catch {

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

    } catch {

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