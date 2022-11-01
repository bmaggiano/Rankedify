const router = require('express').Router();
const { Comments } = require('../../models/comments')

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
        const comment = req.body;
        postComment.user_id = req.session.user_id
        const userComments = await Comments.create(comment);
        res.status(200).json(userComments);
    }
      catch(err) {
      res.status(500).json(err);
    }
});

module.exports = router;