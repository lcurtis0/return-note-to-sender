const express = require('express');
const router = express.Router(); 
const apiRoutes = require('./api-routes.js');
const htmlRoutes = require('./html-routes.js');

//This is the api route
router.use('/api', apiRoutes);
// This is the html route 
router.use('/', htmlRoutes);

module.exports = router;