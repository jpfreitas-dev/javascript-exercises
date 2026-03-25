function priceValidator(prices){
  if (!prices.every(n => n > 0)) console.log("All prices must be positive numbers.");
  if (prices.some(n => n > 100)) console.log("All prices must be less than or equal to 100.");
  
  return `All prices are valid.`
}

console.log(priceValidator([12,23,44,-3,159]));
