const mouse = document.getElementsByClassName("red-box")[0];
    mouse.addEventListener("mouseover", mouseCoordinates);


function mouseCoordinates(e){
    var x = e.clientX;
    var y = e.clientY;
    var coordinates = "Horizontal: " + x + " Vertical: " + y;
        document.getElementsByClassName("red-box")[0].innerHTML = `The coordinates are: ${coordinates}`;
}