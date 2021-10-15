var btn = document.getElementById("myForm");
btn.addEventListener("click", Alert);
btn.addEventListener("click", Alert);
btn.addEventListener("click", Alert);
btn.addEventListener("click", Alert);
btn.addEventListener("click", Alert);
btn.addEventListener("click", Alert);


function Alert(){
    var a = document.getElementById("fName").value;

    var b = document.getElementById("lName").value;

    var c = document.getElementById("info").value;

    var d = document.getElementsByName("q1").value;

    var e = document.getElementsByName("dropdown").value;

    var f = document.getElementById("q2").value;

    alert(`${a}`,`\n${b}`,`\n${c}`,`\n${d}`,`\n${e}`, `\n${e}`, `\n${f}`);
}