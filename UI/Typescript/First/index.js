var somethingFun = 'Riding my bike is fun!';
console.log(somethingFun);
var sandwich = 'BLT'; // string
var orderNumber = 1738; // number
var delicious = true; // boolean
function orderFood(sandwich, orderNumber) {
    console.log("Your order number is  ".concat(1.06 * (orderNumber + 10), "  and contains a ").concat(sandwich, "  sandwich"));
}
orderFood('Ham & Cheese', 32);
