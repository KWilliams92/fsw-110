const clickMe = document.getElementsByClassName("red-box")[0];
    clickMe.addEventListener("click", box); 
    
    function box(){
    document.body.getElementsByClassName("red-box")[0].style.background = "transparent";
  }
