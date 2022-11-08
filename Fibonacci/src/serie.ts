function fibonacci(number: number):void {
    if (number <= 0) {
        console.log('f0',0);
    }else{
        let a:number = 0;
        let b:number = 1;
        console.log('f0', a);
        console.log('f1', b);

        for (let i:number = 1; i < number; ++i) {
            const c = a + b;
            a = b;
            b = c;
            const index: number = i+1;
            console.log('f'+index, c);
        }
    }
};

console.log(fibonacci(10))