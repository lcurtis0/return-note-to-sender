
const path = require('path');
const express = require('express'); // npm express is responsible for the routes to files
const routes = require('./routes');

const PORT = 3001;
const app = express();

app.use(express.static(path.join(__dirname ,'public'))); // __dirname returns the name of the current file directory 
app.use(express.json())
app.use(express.urlencoded({ extended: true })); // this parses the the body.req
app.use(routes);

app.listen(PORT, ()=>
console.log(`PORT is working at ${PORT}`));


module.exports = express;
