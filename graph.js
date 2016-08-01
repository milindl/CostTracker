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

Graph.prototype.plotGraph = function(cvas, width, height) {
  cvas.width = width;
  cvas.height = height;
  var ctx = cvas.getContext("2d");
  var normalizedDataset = this.normalizedData();
  var perBarWidth = Math.floor(width/normalizedDataset.length);
  for(var i=0; i!=normalizedDataset.length; i++) {
    ctx.fillRect(i*perBarWidth, (height-(height*normalizedDataset[i])), perBarWidth, height*normalizedDataset[i]);
  }
}

function test(){
  var g = new Graph([60, 10, 20, 5, 5], null);
  g.plotGraph(document.getElementById("t"), 500,500);
}
