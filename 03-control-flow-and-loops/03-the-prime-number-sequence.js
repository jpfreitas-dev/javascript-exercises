// Write a loop that finds and prints all prime numbers between 1 and 100. You must use nested loops and a "flag" variable to determine primality.

const primeNumbers = [];

for (let num = 2; num < 100; num++) {
  isPrime = true; // 'flag"
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }

  if (isPrime === true) primeNumbers.push(num);
}

console.log(`${primeNumbers.join(', ')} are prime numbers`);