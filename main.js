function assignColors(fields) {
  for(var i=0; i!=fields.length; i++) {
    var a = document.getElementById(fields[i].toLowerCase().replace(" ", ""));
    var color = 360*i/fields.length;
    color="hsl(" + color + ",60%, 50%)";
    a.style.backgroundColor = color;
  }
}

function loadFile(filename, mimetype, cbk) {

  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType(mimetype);
  xhr.open('GET', filename, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
      cbk(xhr.responseText);
    }
  }
  xhr.send(null);

}

function loadPartial(templatePath, dataPath, insertionElement) {
  loadFile(dataPath,"application/json", function(response) {
    var jsonresponse = JSON.parse(response);
    var text = new EJS({url: templatePath}).render(jsonresponse);
    insertionElement.innerHTML += html;
  });
}
