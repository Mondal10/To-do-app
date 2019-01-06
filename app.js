var express = require('express');
var toDoController = require('./controllers/toDoController');
var app = express();

//Setting environment for view engine
app.set('view engine', 'ejs');

//Using static files
app.use(express.static('./assets'));

//Trigger toDoController
toDoController(app);

//Listening to port
app.listen(8080);
console.log('*****STARTED*****');