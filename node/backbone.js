var expenses = require("../expense.js");
var fs = require("fs");
var fPath = "data.txt";
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
  });
};

// exports.add(new expenses.Expense(1, "a", "Cat", new Date()));
