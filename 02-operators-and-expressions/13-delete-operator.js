const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020
}

console.log(car); // { make: "Toyota", model: "Camry", year: 2020 }

delete car.model;

console.log(car); // { make: "Toyota", year: 2020 }
log(car.model); // undefined