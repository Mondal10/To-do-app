//Used to manipulate the data(get/post/delete) and Handle the route
var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({
    extended: false
});

var data = [{
    item: 'get milk'
}, {
    item: 'play fifa'
}, {
    item: 'sleep'
}, {
    item: 'Gym'
}];



module.exports = function (app) {

    app.get('/todo', function (req, res) {
        res.render('todo', {
            todos: data
        });
    });

    app.post('/todo', urlEncodedParser, function (req, res) {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function (req, res) {
        data = data.filter(function (todo) {
            return todo.item.replace(/ /g, '-') !== req.param.item;
        });
        res.json(data)
    });

}