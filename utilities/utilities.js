// cart item
let cart = [];

if (cart.length > 10) {
    cart.splice()
}

var myArray = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11];
myArray.splice(5);
console.log(myArray);

// add to card
function addToCard(e) {
    // get product title and price and push the cart
    const productTitle = this.querySelector('#product-title').innerText;
    const price = this.querySelector('#price').innerText;
    const product = {
        productTitle,
        price
    }
    // push item on cart array
    if (cart.length >= 10) {
        cart.splice(9);
        cart.unshift(product);
    }else{
        cart.unshift(product);
    }
    // calling more functions
    removeCartLastChild('#card-itmes');
    showCartItem();
    totalPriceCalculate();
    enableBtn(totalPriceCalculate());
}

// card item show 
function showCartItem() {
    let count = 0;
    cart.forEach(item => {
        count ++;
        const cartItems = document.querySelectorAll('#card-itmes');
        cartItems.forEach(show => {
            const li = document.createElement('li');
            li.id = ('item');
            li.classList.add('mb-2');
            li.classList.add('text-base');
            li.classList.add('font-semibold');
            li.innerText = count + '. ' +item.productTitle;
            show.appendChild(li);
        });
    });
}

// calculate total price
function totalPriceCalculate() {
    totalPrice = 0
    cart.forEach(item => {
        var price = parseFloat(item.price);
        totalPrice += price;
        //upade the cart sub total price 
        var totlEement = document.querySelectorAll('#sub-total');
        totlEement.forEach(element => {
            element.innerText = totalPrice + ' TK';
        });
        //upade the cart grand total price 
        var grandTotalElement = document.querySelectorAll('#grand-price');
        grandTotalElement.forEach(element => {
            element.innerText = totalPrice + ' TK';
        });
    });
    return totalPrice;
}

// calculate discount
function enableBtn(totalPrice) {
    var totalPrice = totalPrice;
    // enable purchase btn
    if (totalPrice >= 0) {
        var purchaseBtn = document.querySelectorAll('#make-purchase-btn');
        purchaseBtn.forEach(btn => {
            btn.disabled = false;
            btn.style.backgroundColor = '#E527B2';
        });
    }
    // enable coupon btns
    if (totalPrice >= 200) {
        const couponApplyBtn = document.querySelectorAll('#coupon-btn');
        couponApplyBtn.forEach(btn => {
            btn.disabled = false;
            btn.style.backgroundColor = '#E527B2';
        });
    }
}

// discount calculate SELL200
function calculateDiscount() {
    var totalPrice = totalPriceCalculate();
    let couponCode = 'SELL200';
    var discountDisplay = document.querySelectorAll('#discount-display');
    var UsercouponCode = document.querySelectorAll('#coupon-code');

    UsercouponCode.forEach(userCoupon => {
        if (couponCode == userCoupon.value) {
            var discount = (totalPrice * 20) / 100;
            let grandTotal = totalPrice - discount;
            var grandTotalElement = document.querySelectorAll('#grand-price');
            grandTotalElement.forEach(element => {
                element.innerText = grandTotal + ' TK';
            });

            discountDisplay.forEach(element => {
                element.innerText = discount + ' TK';

            });
        }
    });


}

// remove child element
function removeCartLastChild(prenntId) {
    const parentElment = document.querySelectorAll(prenntId);
    parentElment.forEach(show => {
        var child = show.lastElementChild;
        while (child) {
            show.removeChild(child);
            child = show.lastElementChild;
        }
    });

}




























