const { Usergames } = require('../../models/');
const UserInput = require('../../models/userInput');
// const autocompleteArr = require('../../js/autocomplete')
const router = require('express').Router();

router.post('/', async (req, res) =>{
    try {
        const userInputData = await UserInput.create({
            user_id: req.session.user_id,
            game_input_one: req.body.game_input_one,
            game_input_two: req.body.game_input_two,
            game_input_three: req.body.game_input_three,
            game_input_four: req.body.game_input_four,
            game_input_five: req.body.game_input_five
        })
        res.status(200).json(updateList);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router