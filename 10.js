function isPrimeWithArrayOfPrimes(n, arrayOfPrimes) {
  if (n == 1) {
    return false;
  }
  if (n == 2 || n == 3) {
    return true;
  }
  for (var i = 0; i < arrayOfPrimes.length; i++) {
    if (n % arrayOfPrimes[i] == 0) {
      return false;
    }
    if (arrayOfPrimes[i] > Math.round(Math.sqrt(n))) {
        break;
    }
  }
  return true;
}


/**
 * Finds all prime numbers in the range specified by the parameters
 * 
 * @param {any} start Lower bound, included
 * @param {any} end Upper bound, not included
 * @returns 
 */
function getPrimesBetween(start, end) {
  let primes = [];
  for(let i = start; i < end; i++) {
    if(isPrimeWithArrayOfPrimes(i, primes)) {
      primes.push(i);
    }
  }
  return primes;
}

console.time("1")
getPrimesBetween(1, 10E7)
console.timeEnd("1")