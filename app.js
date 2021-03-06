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
/*Setting environment port variable that store port of the server if available or else it will listen port 8080*/
const port = process.env.PORT || 8080;
app.listen(port);
console.log('*****STARTED*****');
