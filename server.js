
const path = require('path');
const express = require('express');
const routes = require('./routes');

const PORT = 3001;
const app = express();

app.use(express.static(path.join(__dirname ,'public')));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use()

app.listen(PORT, ()=>
console.log(`PORT is working at ${PORT}`));



