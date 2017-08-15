function isPrime(number) {
  var start = 2;
  while (start <= Math.sqrt(number)) {
      if (number % start++ < 1) return false;
  }
  return number > 1;
}


getPrimesBetween(1, 2*10E6);

for(let i = 1; i < 2*10E6; i++) {
  if(isPrime(i)) {
    primes.push(i);
    sum += i;
  }
}