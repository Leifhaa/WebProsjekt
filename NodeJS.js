var express = require('express');
var app = express();
var path = require("path");
const fs = require('fs');
const bodyParser = require('body-parser')

   var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/board.html'));
});

app.get('/fcm', function(req, res) {
	console.log('here');
});

app.get('/script.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/script.js'));
})

app.get('/style.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/style.css'));
});

/*
app.post('/', function(req, res) {
    console.log("Attempted to put");
	console.log(req.headers);
});
*/

app.post('/', function(req, res) {
  console.log(req.body.Text);
  // Return the POST message
  //var asd = JSON.stringify(post_body);
  //res.send(post_body);
  console.log(JSON.stringify(req.body))
  console.log(__dirname +  "/input2.json")
  fs.writeFile (__dirname +  "/input2.json", JSON.stringify(req.body), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);
});



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})