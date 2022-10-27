const Usergames = require('../../models/Usergames');

const router = require('express').Router();

router.post('/list', async (req, res) => {
    try {
        for (i=0; i<req.body.userList.length; i++) {
            console.log(req.body.userList[i], req.session.user_id)
            const listData = await Usergames.create({
                user_id: req.session.user_id,
                game_id: req.body.userList[i]
            })
            console.log(listData)
        }
        res.status(200).json("Success")
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
});
//
router.put('/list/:id', async (req, res) => {
    try {

    } catch {

    }
});

router.delete('/list/:id', async (req, res) => {
    try {

    } catch {

    }
});


module.exports = router;
