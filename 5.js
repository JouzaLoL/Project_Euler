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

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};

let factors = [];
for(let i = 2; i <= 20; i++) {
  factors[i] = primeFactors(i);
}
// Remove empty elements from the array
factors.clean();

// Contains objects of type {number: int, power: int }
let finalFactors = [];

factors.forEach((factorArray) => {
  factorArray.forEach((number) => {
    // Find factor in array
    let factor = finalFactors.filter((f) => {
      return f.number == number;
    })[0];
    // If factor is not yet in array, add it
    if (!factor) {
      finalFactors.push({number: number, power: 0});
      // Dirty: find the cator again
      factor = finalFactors.filter((f) => {
        return f.number == number;
      })[0];
    }
    // Calculate power
    let power = factorArray.filter((element) => { 
      return number == element;
    }).length;
    if (factor.power <= power) {
      factor.power = power;
    }
  });
});

let solution = finalFactors.reduce((acc, factor) => {
  return acc * Math.pow(factor.number, factor.power);
}, 1);