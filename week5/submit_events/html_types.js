const form = document.getElementById('myForm');

const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const age = document.getElementById('age');
const options = document.getElementById('menu');

const server = document.getElementById('server').value;

btn = document.getElementById('button');
    btn.addEventListener('click', menuOpts);
    function menuOpts() {
        var food = [];

        if(form.elements["cheeseburger"].checked) {
            food.push(document.getElementById("cheeseburger").value);
        }
        if(form.elements["chicken"].checked) {
            food.push(document.getElementById("chicken").value);
        }
        if(form.elements["salad"].checked) {
            food.push(document.getElementById("salad").value);
        }



alert('First name: ' + fName.value + "\nLast name: " + lName.value + "\nWhat did you order today? " + food + "\nWould you order it again? " + options.value +"\nWho was your server? " + server);
document.getElementById('myform').reset();
    }