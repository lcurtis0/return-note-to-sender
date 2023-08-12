


const express = require('express');
const path = require('path');
const data = require('./db/db.json'); 

const PORT = 3001;
const app = express();
app.use(express.static('public'));

const notes = require('./notes.html');
const index = require('./index.html');

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'));
})

app.get('api/notes', (req, res)=>{
  res.readfromfile('db/db.json').then((data)=>{res.json(JSON.parse(data))})
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


const notesRouter = require('./routes/notes.js');

app.use('/notes', notesRouter);


module.exports = app;

