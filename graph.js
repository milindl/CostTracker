function Graph(dataset, fields) {
  this.dataset = dataset;
  this.fields = fields;
}

Graph.prototype.normalizedData = function() {
  var max = this.dataset[0];
  for(var i=0; i!=this.dataset.length; i++) {
    if(max<this.dataset[i]) max = this.dataset[i];
  }
  var normalizedDataset = [];
  for(var i=0; i!=this.dataset.length; i++) {
    normalizedDataset.push(this.dataset[i]/max);
  }
  return normalizedDataset;
}

function test(){
  var g = new Graph([60, 10, 20, 5, 5], null);
  alert(g.normalizedDataset());
}
