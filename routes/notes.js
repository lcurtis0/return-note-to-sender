
const express = require('express');
const router = express.Router();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
  })
  
  app.get('api/notes', (req, res)=>{
    res.readfromfile('db/db.json').then((data)=>{res.json(JSON.parse(data))})
  })

  app.post('/api/notes', (req, res) => {
    res.json(`${req.method} request received`);
  })

 module.exports = router;