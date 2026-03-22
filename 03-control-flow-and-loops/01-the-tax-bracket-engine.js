// Create a system that calculates income tax for 10 different salaries. Salaries below 2,000 are exempt. From 2,001 to 5,000, 15% tax. Above 5,000, 27.5% tax. If the tax amount is a "Falsy" value (0), print "Tax Free". Otherwise, print the net salary using Template Literals.

const salaries = [1500, 2500, 3000, 4500, 6000, 7500, 10000, 12000, 15000, 20000];

salaries.forEach((salary) => {
  if (salary <= 2000) {
    console.log("Tax free");
  } else if (2001 <= salary && salary <= 5000){
    console.log(`The tax is 15% and the net salary is ${salary * 1.15}`);
  } else {
    console.log(`The tax is 27.5% and the net salary is ${salary * 1.275}`);
  }
});