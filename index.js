var express = require("express"),
	fs = require("fs"),
	port = process.env.PORT || 2595;

var bodyParser = require("body-parser");
var logger = require("morgan");
var app = express();


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set("view options",{
	layout: false
});
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('public/index.html');

});

app.listen(port);
console.log('Express server running at http://localhost:' + port);