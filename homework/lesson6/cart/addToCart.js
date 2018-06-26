var cart = [];
var totalSumm = 0;
var cartHTML = document.getElementById("cart");
var buttons = document.querySelectorAll("button");
console.log(buttons);
for (var i=0; i<buttons.length;i++) {
    buttons[i].addEventListener('click',function(event){
        //console.log(event.target.parentElement);
        var product = event.target.parentElement;
        cart.push(product.children[0]);
        totalSumm += parseInt(product.children[1].innerHTML);
        var totalHTML = document.getElementById("cart__summValue");
        totalHTML.innerText = totalSumm;
        //console.log(product.children[1].innerText);
        var newItem = document.createElement("li");
        newItem.className = "cart__item";
        var newName = document.createElement("div");
        newName.innerText = product.children[0].innerText;
        newItem.appendChild(newName);
        var newPrice = document.createElement("div");
        newPrice.innerText = product.children[1].innerText;
        newItem.appendChild(newPrice);
        cartHTML.appendChild(newItem);
    });
}
