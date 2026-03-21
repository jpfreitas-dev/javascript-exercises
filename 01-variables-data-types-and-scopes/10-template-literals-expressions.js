const product = "laptop";
const price = 999.99;
const quantity = 2;

const message = `The total price for ${quantity} ${product}s is $${(price * quantity).toFixed(2)}.`;

console.log(message);
