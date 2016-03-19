var fs = require("fs");
var storage = require('node-persist');
storage.initSync();

var file = fs.readFileSync("backup.json");
data = JSON.parse(file);

data.map(function(e){
    console.log(e.name);
    storage.setItem(e.name, {points:e.value.points, lines:e.value.lines});
});
