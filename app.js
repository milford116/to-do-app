// JavaScript source code
var express = require('express');
var todocontroller = require('./controllers/todocontrol');
var app = express();
app.set('view engine', 'ejs');

app.use(express.static('./public'));

//fire controllers
todocontroller(app);

app.listen(3000);
console.log('listening on port 3000');
