
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) => {
    return res.sendFile(path.join(__dirname, './public/notes.html'));
  }) // This is the html route to the notes 
  
router.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, './public/index.html'));
  }); // This is a wild card to make sure the default route is to the home page
  
module.exports = router;