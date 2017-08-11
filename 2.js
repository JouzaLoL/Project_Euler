// return all fibb numbers smaller or equal to x in an array 
function fib(x) {
  var arr = [];
  var a = 1;
  var b = 1;
  while (a <= x) {
    a += b;
    b = a - b;
    arr.push(b);
  }
  return arr;
}

// Imperative style
var arr = fib(4000000); //create an array with all the fibb numbers that are lower than or equal to 4 million

function sum() {
  var s = 0;
  for (x = 0; x < arr.length; x++) {
    if (arr[x] % 2 === 0) { //if a number is even, add it to the sum
      s += arr[x];
    }
  }
  return s;
}

const solutionImper = sum();

// Functional style - nice and sleek
const solutionFunc = fib(4E6).reduce((acc, currValue) => {
  return (currValue % 2 === 0) ? acc + currValue : acc;
});