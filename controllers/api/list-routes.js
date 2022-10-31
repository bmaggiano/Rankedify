const  UserInput  = require('../../models/userInput');
const router = require('express').Router();


//need code to compare id.. use data.id from games table to reference.. npm package
// router.put('/list/:id', async (req, res) => {
//     try {
//         let updateList = await User.update(req.body, {
//             where: {
//                 id: req.params.id
//             }
//         })
//         if (!updateList[0]) return res.status(404).json("List not found");
//         res.status(200).json(updateList);
//     }
//     catch (err) {
//         res.status(500).json(err);
// }});


router.delete('/list/:id', async (req, res) => {
    try {
        let deletedList = await UserInput.destroy({
            where: {
                user_id: req.session.user_id
            }
        })
        if (!deletedList) return res.status(404).json("List not found");
        res.status(200).json(deletedList);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
