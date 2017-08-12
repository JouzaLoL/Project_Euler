/* 
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible (divisible with no remainder) by all of the numbers from 1 to 20?

*/

/*

1. Find the least common multiple of all of the numbers.
1. a. rozklad na prvočinitele
1. b. součin prvočinitelů
*/

function primeFactors(number = 2) {
  let factors = [];
  let divisor = 2;
  while(true) {
    if (number / divisor === 1) {
      factors.push(divisor);
      break;
    }
    if (number % divisor === 0) {
      factors.push(divisor);
      number = number / divisor;
      continue;
    } else {
      divisor++;
    }
  }
  return factors;
}

let factors = [2];
for(let i = 2; i <= 20; i++) {
  factors = factors.concat(primeFactors(i));
}