"use strict";
function primeNumber(num) {
    let prime = false;
    if (num > 2) {
        for (let i = 2; i < num - 1; i++) {
            const rest = num % i;
            if (rest === 0) {
                prime = true;
                break;
            }
        }
    }
    return prime;
}
let argum = 4;
if (primeNumber(argum))
    console.log(argum + " is not a prime number");
else
    console.log(argum + " is a prime number");
