function calculateTotal(...prices) {
    let total = prices.reduce((acc, price) => acc + price, 0);
    total = total > 500 ? total * 0.9 : total;
    return total.toFixed(2);
}

// Example usage:
console.log(calculateTotal(100, 150, 200)); // Output: 405.00 (10% discount applied)
console.log(calculateTotal(50, 75)); // Output: 125.00 (no discount)