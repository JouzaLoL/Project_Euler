function largestInArray(array) {
    return Math.max(array);
}

var factors = [];

function getPrimeFactors(number) {
    factors = [];
    primeFactor(number);
    return factors;
}

function largestPrimeFactor(number) {
    var primes = getAllPrimesUpTo(number);
    console.log('==== BEGIN FUNCTION primeFactor');
    console.log("Primes", primes);
    console.log("Number", number);


    for (var index = primes.length - 1; index >= 0; index--) {
        console.log("index: ", index);
        console.log("prime at index: {0}", primes[index])
        if (number % primes[index] === 0) {
            console.log("Found factor, factor: ", primes[index]);
            return primes[index];
        }
        console.log("==========");
    }
}

function primeFactor(number) {
    var primes = getAllPrimesUpTo(number);
    console.log('==== BEGIN FUNCTION primeFactor');
    console.log("Primes", primes);
    console.log("Number", number);


    for (var index = primes.length - 1; index >= 0; index--) {
        console.log("index: ", index);
        console.log("prime at index: {0}", primes[index])
        if (number % primes[index] === 0) {
            console.log("Found factor, factor: ", primes[index]);
            console.log("Number: ", number);
            factors.unshift(primes[index]);
            number = number / primes[index];
            index++;
            primeFactor(number);
            break;
        }
        console.log("==========");
    }
    return factors;
}

function getAllPrimesUpTo(number) {
    var a = [];
    if (number >= 2) {
        a.push(2);
    }

    for (var index = 0; index <= number; index++) {
        if (isPrime(index)) {
            a.push(index);
        }
    }
    return a;
}

function isPrime(number) {
    var result;
    for (var index = 2; index < number; index++) {
        if (number % index === 0) {
            return false;
        } else {
            result = true;
        }
    }
    return result;
}



function returnLargestPrimeFactor(number) {
    console.log("============= BEGIN FN ======");
    console.log("Number: ", number);
    var r;
    for (var i = number - 1; i > 1; i--) {
        if (number % i === 0) {
            console.log('==== Found factor', i);
            number = i;
            r = i;
            returnLargestPrimeFactor(number);
        }
    }
    return r;
}

function prime(number) {
    for (var i = 1; i <= number; i++) {
        if ((number === i) || (number === 1)) { //Reached the end, return
            return i;
        }
        if (i === 1) {
            continue;
        }
        if (number % i === 0) {
            number = number / i;
            prime(number);
        }
    }
}


var x;
var big;

function getPrimer(number) {
    x = number - 1;

    primer(number);
    return big;
}


function primer(number) {
    if (number % x === 0) {
        big = x; //Record the factor
        primer(number / x);
    }
    x--;
}



function pr(number, factor) {
    if (factor === null) {
        factor = number - 1;
    }
    if (number === factor) {
        factor--;
    }
    if (number % factor === 0) {
        number = number / factor;
        pr(number, factor - 1);
    }
    return number;
}

var res;

function fuck(num) {
    for (var index = 2; index < num; index++) {
        if (num % index === 0) { //Found a factor
            num = num / index;
            res = index;
        }
    }
    return res;
}