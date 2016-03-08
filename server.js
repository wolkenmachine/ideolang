var express = require('express');
var bodyParser = require('body-parser');

var storage = require('node-persist');
storage.initSync();

var app = express();
app.use(bodyParser.json());

//serve the editor
app.get('/edit/:name', function (req, res) {
    res.sendFile('static/editor/editor.html',{root: __dirname});
});


//serve the character json files
app.get('/character/:name', function (req, res) {
    res.send(storage.getItem(req.params.name));
});

app.post('/character/:name', function (req, res) {
    storage.setItem(req.params.name, req.body);
    res.send("ok!");
});

app.get('/characters', function (req, res) {
    var values = [];
    storage.forEach(function(key, value) {
        values.push({name: key, value: value});
    });
    res.send(values);
});

app.listen(83, function () {
    console.log('Example app listening on port 3000!');
});

app.use(express.static('static'));
