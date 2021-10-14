var input = document.getElementById('change-me');

input.addEventListener('change', output); 

    function output(e) {
       document.getElementById('output').textContent = e.target.value;  
    }


