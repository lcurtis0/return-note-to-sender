

/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
  })
  
  app.get('/api/notes', (req, res)=>{
    res.read('db/db.json').then((data)=>{res.json(JSON.parse(data))})
  })

  app.post('/api/notes', (req, res) => {
    res.json(`${req.method} request received`);
  })

 module.exports = router;

 */
/*
 The following API routes should be created:

4. POST /api/notes should body, 
add it to the db.json file, and then return the new note to the client. 
You'll need to find a way to give each note a unique id when it's saved 
(look into npm packages that could do this for you). 
*/

const express = require('express');
const { writeFile, readFile } = require("fs");
const router = express.Router();
const dbData = require('../db/db.json');

router.get('/notes', (req, res) => {
  const dbDataFile = readFile(path.join(__dirname ,'../db/db.json'));
  res.status(200).json(dbDataFile);
})

router.get('/notes/:activeNoteid', (req, res) => {
  if (req.params.activeNoteid) {
    console.info(`For client:${req.method} request for a new note has been made`);
    const newNoteId = req.params.activeNoteid;
    for (let i = 0; i < dbData.length; i++) {
      const currentNote = dbData[i];
      if (currentNote.activeNoteid === newNoteId) {
        res.json(currentNote);
        return;
      }
    }
    res.status(404).send('No new note has been made or found 404');
    console.info(`No new note has been made or found 404`);
  } else {
    res.status(400).send('Note ID has not been made 400');
    console.info(`Note ID has not been made 400`);
  }
})

router.post('/notes/:activeNoteid', (req, res) => {
  if (req.body && req.params.activeNoteid) {
    console.info(`For client:${req.method} request for a new note has been made`);
    const newNoteId = req.params.activeNoteid;
    for (let i = 0; i < dbData.length; i++) {
      const currentNote = dbData[i];
      if (currentNote.activeNoteid === newNoteId) {
        res.json(currentNote);
        return;
      }
    }
    res.status(404).send('No new note has been made or found 404');
    console.info(`No new note has been made or found 404`);
  }
})


router.post('/notes', (req, res) => {
  console.info(`${req.method} request received to add new note`);
  const { noteTitle, noteText } = req.body;

  if (noteTitle && noteText) {
    const newNote = {
      title,
      note,
      activeNoteid: (1 + Math.floor(Math.random()) * 100)
    }


    readFile('./db/db.json', 'utf8', (err, newNote) => {
      if (err) {
        console.error('There was an error reading the file '+ err);
      } else {
        const parsedNote = JSON.parse(dbData);
    
        parsedNote.push(newNote);
    
        // This writes a new file including the pushed parsed note
        writeFile(
          './db/db.json',
          JSON.stringify(parsedNote),
          (err) =>
            err ? console.error(err): console.info('Successfully added a new note to list!')
        );
      }
    });

  }

})

module.exports = router;

