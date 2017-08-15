function isPrime(n) {
  if (n == 1 || n == 2) {
    return true;
  }
  for (let i = 2; i <= n; i++) {
    if (n % i == 0 && n != i) {
      return false;
    }
  }
  return true;
}

function getNthPrime(n) {
  let numberOfPrimes = 0;
  let currentPrime;
  let i = 2;
  while(true) {
    if (numberOfPrimes == n) {
      return currentPrime;
    }
    // Found prime number n
    if (isPrime(i)) {
      numberOfPrimes++;
      currentPrime = i;
    }
    i++;
  }
}

let solution = getNthPrime(10001);
console.log(solution);