function primeFactorization(number = 2) {
  let factors = [];
  let divisor = 2;
  while (true) {
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

function cleanArray(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {
      this.splice(i, 1);
      i--;
    }
  }
  return this;
}

function primeFactorizationWithPowers(n) {
  let factors = primeFactorization(n);
  // Contains objects of type {number: int, power: int }
  let factorsWithPowers = [];


  factors.forEach((number) => {
    // Find factor in array
    let factor = factorsWithPowers.filter((f) => {
      return f.number == number;
    })[0];
    // If factor is not yet in array, add it
    if (!factor) {
      factorsWithPowers.push({ number: number, power: 0 });
      // Dirty: find the factor again
      factor = factorsWithPowers.filter((f) => {
        return f.number == number;
      })[0];
    }
    // Calculate power
    let power = factors.filter((element) => {
      return number == element;
    }).length;
    if (factor.power <= power) {
      factor.power = power;
    }
  });
  return factorsWithPowers;
}

function getDivisorCount(n) {
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  }
  let factors = primeFactorizationWithPowers(n);
  return factors.map((factor) => {
    return factor.power
  }).reduce((acc, power) => {
    return acc *= (power + 1);
  }) + 1;
}


let triangleNumber = 1;
for (let a = 0; a < 10E30; a++) {
  triangleNumber += a;
  let divisorCount = getDivisorCount(triangleNumber);
  if (divisorCount > 500) {
    console.log('FOUND: ' + triangleNumber);
    break;
  } else {
    console.log('a: ' + a + '| Trianglenumber: ' + triangleNumber + '| Divisor count: ' + divisorCount);
  }
}

