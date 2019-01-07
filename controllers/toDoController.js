//Used to manipulate the data(get/post/delete) and Handle the route
var bodyParser = require('body-parser');
var uuid = require('uuid');
var urlEncodedParser = bodyParser.urlencoded({
    extended: false
});

var data = [{
    id: uuid(),
    item: 'get milk'
}, {
    id: uuid(),
    item: 'play fifa'
}, {
    id: uuid(),
    item: 'sleep'
}, {
    id: uuid(),
    item: 'Gym'
}];



module.exports = function (app) {

    app.get('/todo', function (req, res) {
        res.render('todo', {
            todos: data
        });
    });

    app.post('/todo', urlEncodedParser, function (req, res) {
        data.push({id: uuid(),item: req.body.item});
        res.json(data);
    });

    app.delete('/todo/:item', function (req, res) {
        data = data.filter(function (todo) {
            return todo.id !== req.params.item;
        });
        res.json(data)
    });

}