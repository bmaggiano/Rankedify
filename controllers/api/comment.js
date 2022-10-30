const router = require('express').Router();
const { Comments, User } = require('../../models')

//displays comments 
// router.get('/comments', async (req, res) => {
//     try {
//         const commentData = await Comments.findAll({
//             indlude: [
//                 {
//                     model: User,
//                     attributes: ['username'],
//                 },
//             ],
//         });

//         const comments = commentData.map((gallery) =>
//         gallery.get({ plain: true })
//       );

//       res.render(
       
//       );
//     } catch {
//         res.status(500).json(err);
//     }
// });

//Creates new comment
router.post('/comments', async (req, res) => {
    try {
        const comment = await Comments.create({
            username: req.body.username
        }); 

        const comments = commentData.map((gallery) =>
        gallery.get({ plain: true })
      );

      res.render(//need reference to handlebar, {
        //comments }
      );

    } catch {

    }
});

module.exports = router;