
const express = require('express');
const path = require('path');
const dbData = require('./Develop/db/db.json');

const PORT = 3001;
const app = express();
app.use(express.static('public'));

const notes = require('./notes.html');
const index = require('./index.html');

app.get('/notes', (req, res) => {
  return res.sendFile(path.join(__dirname, notes));
})

app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, index));
});

app.get('/api', (req, res) =>{
  return res.json(dbData);
})


const notesRouter = require('./routes/notes.js');

app.use('/notes', notesRouter);

app.listen(PORT, ()=>
console.log(`hello PORT is working ${PORT}`))

module.exports = app;

