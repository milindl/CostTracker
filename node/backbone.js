var expenses = require("../expense.js");
var fs = require("fs");
var fPath = "data.txt";
var loadedFile = false;
/*
  Super interesting thing:
*/
//var dataFileLock = false; F*** deadlocks, I do not care for them.
exports.add = function(exp) {
  var saveable = exp.save();
  saveable+="\n";
  fs.appendFile(fPath, saveable, function(err) {
    if(err) return err;
    console.log(fPath);
    console.log(saveable);
    console.log("Appended");
    if(loadedFile) loadedFile+=saveable;
  });
};
exports.load = function(cback) {
  if(loadedFile) cback(loadedFile);
  fs.readFile(fPath, function(err, d) {
    if(err) return err;
    loadedFile=d.toString();
    cback(loadedFile);
  });
};
// exports.load(function(t) {
//   console.log(t);
// })
// // exports
// exports.add(new expenses.Expense(1, "a", "Cat", new Date()));
// exports.load(function(t) {
//   console.log(t);
// })
