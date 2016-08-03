var express=require("express");
var fs=require("fs");
var url=require("url");
var expenses = require("../expense.js");
var backbone = require("./backbone.js");
var app = express();

app.use("/", express.static("../")) //Serve all the static files
app.listen(7080);
