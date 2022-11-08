"use strict";
function reverse(arg) {
    let result = '';
    let i;
    for (i = 0; i < arg.length; i++) {
        result = arg.charAt(i) + result;
    }
    return result;
}
const reverseConst = (arg) => {
    let result = '';
    let i;
    for (i = 0; i < arg.length; i++) {
        result = arg.charAt(i) + result;
    }
    return result;
};
console.log(reverse('odraniM'));
console.log(reverseConst('kraPsneG'));
