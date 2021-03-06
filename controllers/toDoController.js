//Used to manipulate the data(get/post/delete) and Handle the route
var bodyParser = require('body-parser');
var uuid = require('uuid/v1');
var mongoose = require('mongoose');

//Connect to the database of mlab
// mongoose.connect('mongodb://test123456:test123456@ds127978.mlab.com:27978/to-do-app', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://test123456:test123456@to-do-app.zs8gh.mongodb.net/to-do-app?retryWrites=true&w=majority', { useNewUrlParser: true });

//Create a database schema
var todoSchema = new mongoose.Schema({
    id: String,
    item: String
});

//Create new model Todo
var Todo = mongoose.model('Todo', todoSchema);
// var item1 = Todo({id: uuid(), item: 'go gym'}).save(function(err){
//     if(err) throw err;
//     console.log('Item saved');
// });

var urlEncodedParser = bodyParser.urlencoded({
    extended: false
});

module.exports = function (app) {

    app.get('/', function (req, res) {
        //Get data from mongoDB and pass it to view
        Todo.find({}, function(err,data){
            if(err) throw err;
            res.render('todo', {
                todos: data
            });
        });
        
    });

    app.post('/', urlEncodedParser, function (req, res) {
        //Get data from the view and add to mongoDB
        var newTodo = Todo({id: uuid(),item: req.body.item}).save(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    });

    app.delete('/:item', function (req, res) {
        //Delete the requested/clicked item(in view) from mongoDB
        /*Todo.find({id: req.params.item}).remove(function(err,data){
            if(err) throw err;
            res.json(data)
        });   .remove is deprecated*/
        Todo.deleteOne({id: req.params.item},function(err,data){
            if(err) throw err;
            res.json(data)
        }); 
    });

}
