"use strict";
function fibonacci(number) {
    if (number <= 0) {
        console.log('f0', 0);
    }
    else {
        let a = 0;
        let b = 1;
        console.log('f0', a);
        console.log('f1', b);
        for (let i = 1; i < number; ++i) {
            const c = a + b;
            a = b;
            b = c;
            const index = i + 1;
            console.log('f' + index, c);
        }
    }
}
;
console.log(fibonacci(10));
