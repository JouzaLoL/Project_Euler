function isPalindrome(number) {
  return number == number.toString().split("").reverse().join("");
}

let palindromes = [];

for (let first = 100; first <= 999; first++) {
  for (let second = 100; second <= 999; second++) {
    let product = first * second;
    if (isPalindrome(product)) {
      palindromes.push(product);
    }
  }
}

function sortNumber(a, b) {
  return a - b;
}

palindromes.sort(sortNumber);