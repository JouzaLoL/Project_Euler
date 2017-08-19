function getDivisorCount(n) {
  let divisorCount = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      divisorCount++;
      if (i != n/i) {
        divisorCount++;
      }
    }
  }
  return divisorCount;
}

function getNthTriangleNumber(n) {
  let triangleNumber = 0;
  for (let i = 1; i <= n; i++) {
    triangleNumber += i;
  }
  return triangleNumber;
}

let i = 1;
while(true) {
  let triangleNumber = getNthTriangleNumber(i);
  let divisorCount = getDivisorCount(triangleNumber);
  if (divisorCount > 500) {
    console.log(triangleNumber);
  } else {
    console.log('i: ' + i + '| Divisor count: ' + divisorCount);
    i++;
  }
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

