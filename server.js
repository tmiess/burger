var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var port = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
