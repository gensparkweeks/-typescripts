"use strict";
function palindrome(param) {
    let result = false;
    let paramValue;
    if (typeof param === 'number') {
        paramValue = param.toString();
    }
    else
        paramValue = param;
    let reverse = paramValue.split('').reverse().join('');
    if (paramValue.toLowerCase().match(reverse.toLowerCase()) !== null) {
        result = true;
    }
    console.log('Reversed: ' + reverse);
    return result;
}
let argum = "Minardo";
if (palindrome(argum))
    console.log(argum + " is a paindrome");
else
    console.log(argum + " is not a paindrome");
