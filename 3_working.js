function big(n) {
    var i = 2;
    while (true) {
        if (n % i === 0) { //i is a factor
            n = n / i; //Divide the number by the factor
        } else { //i isn't a factor, increase i
            i++;
        }

        if (n === i) { //end of division, return i
            break;
        }
    }

    return i;
}

/*

i, the divisor, starts at 2, the smallest prime number. n, the number, can be any real number
It takes nand tries to divide it by i.
If n is divisible by i, it divides it and repeats the loop.
If not, it increments i and repeats the loop.
If n is equal to i, it breaks the loop and returns the function.

So it will divide the number by 2 until it cannot be divided by 2 anymore, then it starts to increment 2 to find another divisor, and after it has found it, repeats.
If number is equal to the divisor that means that we have come to the end of the division.

Example: 10

10 % 2 === 0 >> divide it by 2, n is now 5, repeat the loop
5 % 2 != 0 >> increment i until it's 4 >> it enters the loop, 5 % 4 != 0 so it increments i, then tests if i === n, true >> break the loop.

*/

//Measure the speed
console.time('big');

console.log(big(600851475143)); // run whatever needs to be timed in between the statements

console.timeEnd('big');