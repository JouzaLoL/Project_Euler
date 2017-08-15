let numbers = [];
for(let i = 1; i <= 100; i++) {
  numbers[i] = i;
}

let sumOfSquares = numbers.reduce((acc, number) => {
  return acc + Math.pow(number, 2);
});

let squareOfSums = Math.pow(numbers.reduce((acc, number) => {
  return acc + number;
}), 2);

let difference = squareOfSums - sumOfSquares;
let solution = difference;