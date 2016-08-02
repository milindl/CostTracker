function Expense(amount, remarks, category, date) {
  this.amount = amount;
  this.remarks = remarks;
  this.category = category;
  if(date!=null)this.date = date;
  else this.date=new Date();
}
Expense.prototype.save = function() {
  var dFormat = this.date.getDate() + "/" + (this.date.getMonth()+1)+"/"+this.date.getFullYear();
  return [dFormat, this.amount, this.category, this.remarks].join("$");
}
Expense.load = function(st) {
  var tokens = st.split("$");
  var dateParams = tokens[0].split("/");
  var d = new Date(parseInt(dateParams[2]), parseInt(dateParams[1])-1 , parseInt(dateParams[0]));
  return new Expense(parseInt(tokens[1]), tokens[3], tokens[2], d);
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

// Test code
var e = [];
e.push(new Expense(1,"hi", "C"));
e.push(new Expense(11,"h2i", "C"));
e.push(new Expense(12,"hisa", "B"));
console.log(Expense.load("1/8/2016$45$FnB$Juice").date.getDay())
