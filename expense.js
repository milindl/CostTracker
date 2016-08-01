function Expense(amount, remarks, category) {
  this.amount = amount;
  this.remarks = remarks;
  this.category = category;
}
Expense.threshold = function(expenseList,lowerBound,upperBound) {
  //Get expenses bounded by certain specific limits
  var finalList = [];
  for(var i=0; i!=expenseList.length; i++) {
    if(expenseList[i].amount>lowerBound && expenseList[i].amount<upperBound) finalList.push(expenseList[i]);
  }
  return finalList;
};
Expense.categorize = function(expenseList, cat) {
  //Find those expenses from the expenseList that fall under the given category
  var finalList = [];
  for(var i=0; i!=expenseList.length; i++) {
    if(expenseList[i].category==cat) finalList.push(expenseList[i]);
  }
  return finalList;
};
var e = [];
e.push(new Expense(1,"hi", "C"));
e.push(new Expense(11,"h2i", "C"));
e.push(new Expense(12,"hisa", "B"));
console.log(Expense.threshold(e, 0,12)) ;
