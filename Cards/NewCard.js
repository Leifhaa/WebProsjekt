var fs = require('fs');
var Card = {Name:"TitleCard",
Text:"TextCard"}

console.log("hi");

var jason = JSON.stringify(Card);

console.log("Stop");

fs.writeFile('myjsonfile.json', json, 'utf8', callback);
alert("stop");