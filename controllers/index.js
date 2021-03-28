// Require all the routes and define paths for each, to export to server

// Dependencies
const router = require('express').Router();
const apiRoutes = require('./api');
const homePageRoutes = require('./home-routes');

// Paths
router.use('/api', apiRoutes);
router.use('/', homePageRoutes);

// Route for non-existent page
router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;