const baseMenu = {
  mainDish: "Grilled Chicken",
  sideDish: "Steamed Vegetables",
  price: 14.99
}

const promoMenu = {
  mainDish: "Grilled Salmon",
  price: 12.99,
  dessert: "Chocolate Cake"
}

const finalMenu = { ...baseMenu, ...promoMenu };

const { mainDish, price } = finalMenu;
console.log(`Today's special is ${mainDish} for $${price}.`);
// Output: Today's special is Grilled Salmon for $12.99.