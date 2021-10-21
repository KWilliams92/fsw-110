var coffeeP = 2;
var cldP = 4;
var vanP = 4;
var chaiP = 3;
var blkCoffee = document.getElementById('coffee1');
var cldBrew = document.getElementById('coffee2');
var vanLatte = document.getElementById('coffee3');
var chaiTea = document.getElementById('coffee4');

var button = document.getElementById('submit');
    button.addEventListener('click', function(e) {
    e.preventDefault();

    var itemsT = 0;
    var priceT = 0;

    var items = document.getElementById('items');
    var itemsPrice = document.getElementById('items-price');

    if (blkCoffee.value > 0 || cldBrew.value > 0 || vanLatte.value > 0 || chaiTea.value > 0) {

            itemsT += parseInt(blkCoffee.value) + parseInt(cldBrew.value) + parseInt(vanLatte.value) + parseInt(chaiTea.value);
            priceT += (parseFloat(coffeeP * blkCoffee.value)) + (parseFloat(cldP * cldBrew.value)) + (parseFloat(vanP * vanLatte.value)) + (parseFloat(chaiP * chaiTea.value));    
        }
    items.textContent = itemsT;
    itemsPrice.textContent = priceT;
});