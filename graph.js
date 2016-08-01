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
  var fontConstant = 50;
  var labelConstant = 50;
  height=height-fontConstant-labelConstant; //For text and stuff ABOVE the actual height
  var ctx = cvas.getContext("2d");
  var normalizedDataset = this.normalizedData();
  var perBarWidth = Math.floor(width/normalizedDataset.length);
  for(var i=0; i!=normalizedDataset.length; i++) {
    var color=Math.floor(360*i/normalizedDataset.length);
    color = "hsl(" + color + ",60%, 50%)";
    ctx.fillStyle=color;
    ctx.fillRect(i*perBarWidth, (fontConstant+height-(height*normalizedDataset[i])), perBarWidth, height*normalizedDataset[i]);
    ctx.textAlign = "center";
    ctx.fillText(""+(this.dataset[i]), Math.floor((i+0.5) * perBarWidth), (fontConstant-10+height-(height*normalizedDataset[i])));
    ctx.fillText(""+(this.fields[i]), Math.floor((i+0.5) * perBarWidth), (fontConstant+labelConstant+(height)));
  }
}

function test(){
  var d = [10, 19, 20, 2, 3, 8.0, 9.7, 8.34];
  var f = ['timeless', 'tradefree', 'teign', 'lessthat', 'ticktock', 'reimann', 'feynman', 'lolilike'];
  var g = new Graph(d,f);
  g.plotGraph(document.getElementById("t"), window.innerWidth,400);
}
