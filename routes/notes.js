
const express = require('express');
const router = express.Router();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
  })
  
  app.get('api/notes', (req, res)=>{
    res.readfromfile('db/db.json').then((data)=>{res.json(JSON.parse(data))})
  })

 module.exports = router;