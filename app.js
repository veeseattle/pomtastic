var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var fs = require("fs");
var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));

 console.log("\n *START* \n");
// var content = fs.readFileSync("content.txt");
 console.log("Output Content : \n"+ obj);
 console.log("\n *EXIT* \n");