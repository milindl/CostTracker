function assignColors(fields) {
  for(var i=0; i!=fields.length; i++) {
    var a = document.getElementById(fields[i].toLowerCase().replace(" ", ""));
    var color = 360*i/fields.length;
    color="hsl(" + color + ",60%, 50%)";
    a.style.backgroundColor = color;
  }
}
