// select the products
const products = document.querySelectorAll('#product');

// addEventListener add on item
products.forEach(product => {
    product.addEventListener('click', addToCard);
});

// apply coupon code
var couponBtn = document.querySelectorAll('#coupon-btn');

couponBtn.forEach(btn => {
    btn.addEventListener('click', calculateDiscount);
});


document.getElementById('responsive-cart-btn').addEventListener('click', function () {
    var miniCart = document.getElementById('mini-cart');
    miniCart.style.display = 'block';
    miniCart.classList.add('cartAnimation');
    console.log('mini btn clicked');
});
document.getElementById('cart-close-btn').addEventListener('click', function () {
    var miniCart = document.getElementById('mini-cart');
    miniCart.style.display = 'none';
    miniCart.classList.remove('cartAnimation');
});

// popup-container


var makePurchase = document.querySelectorAll('#make-purchase-btn');
makePurchase.forEach(btn => {
    btn.addEventListener('click',function(){
        var popupContainer = document.getElementById('popup-container');
        popupContainer.style.display = 'flex'; 
    })   
});

document.getElementById('popup-btn').addEventListener('click',function(){
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'none';
});













