const productName = "Smartphone Samsung Galaxy S24 Ultra"


function convertToURL(input){
  return input
          .trim() // => "Smartphone Samsung Galaxy S24 Ultra"
          .toLowerCase() // => "smartphone samsung galaxy s24 ultra"
          .replaceAll(" ", "-") // => "smartphone-samsung-galaxy-s24-ultra"
}

console.log(convertToURL(productName));
