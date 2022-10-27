const router = require('express').Router();

const listRoutes = require('./list-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment')

router.use('/api', listRoutes);
router.use('/api', userRoutes);
router.use('/api', commentRoutes);

module.exports = router;