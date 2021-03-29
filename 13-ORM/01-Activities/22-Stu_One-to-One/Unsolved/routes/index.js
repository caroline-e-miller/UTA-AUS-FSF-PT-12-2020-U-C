// calls express router and api folder
const router = require('express').Router();
const apiRoutes = require('./api');
// use the routes in the api folder
router.use('/api', apiRoutes);

module.exports = router;
