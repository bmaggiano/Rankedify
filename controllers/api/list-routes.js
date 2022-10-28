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
//need code to compare id.. use data.id from games table to reference.. npm package
router.put('/list/:id', async (req, res) => {
    try {
        let updateList = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        if (!updateList[0]) return res.status(404).json("List not found");
        res.status(200).json(updateList);
    }
    catch (err) {
        res.status(500).json(err);
}});

router.delete('/list/:id', async (req, res) => {
    try {
        let deletedList = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!deletedList) return res.status(404).json("List not found");
        res.status(200).json(deletedList);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
