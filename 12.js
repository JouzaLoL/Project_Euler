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

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function primeFactorizationWithPowers(n) {
  let factors = primeFactorization(n);
  let factorsWithPowers = factors.filter(onlyUnique).map((factor) => {
    return { number: factor, power: 0 };
  });

  for (let i = 0, length = factors.length; i < length; i++) {
    let currentNumber = factors[i];
    factorsWithPowers.find((element) => {
      return element.number === currentNumber;
    }).power++;
  }

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
    return acc = acc * (power + 1);
  }, 1);
}

let triangleNumber = 0;
for (let a = 1; a < 10E30; a++) {
  triangleNumber += a;
  let divisorCount = getDivisorCount(triangleNumber);
  if (divisorCount > 500) {
    console.log('FOUND: ' + triangleNumber);
    break;
  } else {
    console.log('a: ' + a + '| Trianglenumber: ' + triangleNumber + '| Divisor count: ' + divisorCount);
  }
}

