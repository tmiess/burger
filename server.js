var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// var port = process.env.PORT || 8080;
var port = 8081;


var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride("_method"));

// set handlebars as view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// imports routes and allows server to access
app.use("/", require('./controllers/burgers_controller.js'));

app.listen(port, function() {
    console.log("burger app listening on PORT" + port);
});
