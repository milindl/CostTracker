var express=require("express");
var fs=require("fs");
var url=require("url");
var expenses = require("../expense.js");
var backbone = require("./backbone.js");
var app = express();

app.get("/add", function(req,res) {
  //Need to fetch parameters from request
  var query = url.parse(req.url, true).query;
  console.log(query);
  var exp = new expenses.Expense(parseInt(query['amount']), query['remarks'], query['category'], new Date());
  backbone.add(exp);
  res.redirect("/");
});
app.use("/", express.static("../")) //Serve all the static files
app.listen(7080);
