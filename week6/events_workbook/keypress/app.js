const input = document.createElement("input");
  input.setAttribute("type", "text");
  document.getElementById("output").appendChild(input);

const press = document.getElementById("output");
press.addEventListener("keydown", showKeyCode);

function showKeyCode(event) {
  var key = event.keyCode;
  document.getElementById("output").innerHTML = "The Unicode value is: " + key;
}