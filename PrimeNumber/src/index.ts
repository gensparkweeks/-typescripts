function primeNumber(num: number): boolean{
    let prime: boolean = false;
    if (num > 2){
        for(let i=2; i < num-1; i++){
            const rest: number = num % i;
            if (rest === 0){
                prime = true;
                break;
            }
        }
    }
    return prime;
}
let argum:number = 4;
if (primeNumber(argum)) 
    console.log(argum + " is not a prime number")
else 
    console.log(argum + " is a prime number")
