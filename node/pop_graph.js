var express=require("express");
var fs=require("fs");
var url=require("url");
var expenses = require("../expense.js");
var backbone = require("./backbone.js");
var app = express();
var filters = {"CategoryValue":backbone.filterCategoryValue};
app.get("/add", function(req,res) {
  //Need to fetch parameters from request
  var query = url.parse(req.url, true).query;
  console.log(query);
  var exp = new expenses.Expense(parseInt(query['amount']), query['remarks'], query['category'], new Date());
  backbone.add(exp);
  res.redirect("/");
  res.end("ok");
});
app.get("/load", function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var query = url.parse(req.url, true).query;
  backbone.load(function(rawData) {
    rawData = rawData.split("\n");
    var actualData = [];
    for(var i=0; i!=rawData.length-1; i++) {
      actualData.push(expenses.Expense.load(rawData[i]));
    }
    var actualData = filters[query['filter']](actualData);
    res.end(JSON.stringify(actualData, null, "   "));
    // res.end("Bye");
  });
});
app.use("/", express.static("../")) //Serve all the static files
app.listen(7080);
