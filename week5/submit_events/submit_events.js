var btn = document.getElementById("myBtn");
btn.addEventListener("click", fName);
btn.addEventListener("click", lName);
btn.addEventListener("click", info);

function fName(){
    var a = document.getElementById("fName").value;
    alert(a);
    document.getElementById('fName').value = "";
}
 function lName(){
    var b = document.getElementById("lName").value;
    alert(b);
    document.getElementById('lName').value = "";
}
function info(){
    var c = document.getElementById("info").value;
    document.getElementById('info').value = "";
    alert(c);
}