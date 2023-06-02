// New List Item Function
function addTask() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Enter Your Task");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "hide";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < hide.length; i++) {
    hide[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//How to hide displayed list
var hide = document.getElementsByClassName("hide");
var i;
for (i = 0; i < hide.length; i++) {
  hide[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
