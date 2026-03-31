const newProducts = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 499 },
  { id: 3, name: "Tablet" }, // Missing price
];

const validateProducts = (products) => {
  const isValid = products.every((product) => product.id && product.price !== undefined);
  if (!isValid) {
    throw new Error("Invalid product data");
  }
  return products.map((product) => ({ ...product, verified: true }));
};

// Example usage:
try {
  console.log(validateProducts(newProducts));
} catch (error) {
  console.error(error.message);
}