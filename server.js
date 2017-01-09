var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
mongoose.connect('mongodb://47.88.149.87:27017/angular-test');
var Todo = mongoose.model('todo', {
    text: String,
    finish: Boolean
});

Todo.find(function (err, todos) {
    if (err) {
        console.log(err);
        return;
    }
    if (todos && todos.length == 0) {
        Todo.insertMany([
            new Todo({ text: 'send an email to andy', finish: false }),
            new Todo({ text: 'study the angular2 demo', finish: false }),
            new Todo({ text: 'buy an ticket', finish: false }),
            new Todo({ text: 'go shopping', finish: false }),
        ]);

    }
});

app.use(express.static(__dirname));
// Enable logger (morgan)
// app.use(morgan(logger.getFormat(), logger.getOptions()));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());



app.get('/api/todos', function (req, res) {
    Todo.find(function (err, todos) {
        if (err) {
            res.send(err);
        }
        res.json(todos);
    })
})

app.post('/api/todos', function (req, res) {
    Todo.create({
        text: req.body.text,
        finish: false
    }, function (err, todo) {
        if (err) {
            res.send(err);
        }

        Todo.find(function (err, todos) {
            if (err) {
                res.send(err);
            }
            res.json(todos);
        })
    })
})

app.delete('/api/todos/:todo', function (req, res) {
    // Todo.remove({
    //     _id: req.params.todo
    // }, function (err, todo) {
    //     if (err) {
    //         res.send(err);
    //     }
    //     Todo.find(function (err, todos) {
    //         if (err) {
    //             res.send(err);
    //         }

    //         res.json(todos);
    //     })
    // })
    // console.log(req);
    var done = req.query.finish;
    Todo.findByIdAndUpdate(req.params.todo, { $set: { finish: done } }, function (err, todo) {
        console.log(req.query.finish);
        if (err) {
            res.send(err);
        }
        console.log(todo);
        // res.json(todo);
        Todo.find(function (err, todos) {
            if (err) {
                res.send(err);
            }
            // console.log(todos);
            res.json(todos);
        })
    });
})

app.get('*', function (req, res) {
    res.sendfile('./index.html');
})



app.listen(8080, function () {
    console.log('App listening on port 8080');
})