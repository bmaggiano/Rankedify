const router = require('express').Router();

const listRoutes = require('./list-routes');
const signUpRoutes = require('./sign-up');
const commentRoutes = require('./comment')

router.use('/api', listRoutes);
router.use('/api', signUpRoutes);
router.use('/api', commentRoutes);

module.exports = router;