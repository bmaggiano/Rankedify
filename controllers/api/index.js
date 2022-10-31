const router = require('express').Router();

const listRoutes = require('./list-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment')
const userInputRoutes = require('./userInput-routes')

router.use('/lists', listRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/userInput', userInputRoutes);

module.exports = router;