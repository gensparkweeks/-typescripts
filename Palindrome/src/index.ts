function palindrome(param: string | number): boolean{
    let result: boolean = false;
    let paramValue:string;

    if(typeof param === 'number'){
        paramValue = param.toString();
    }else paramValue = param;

    let reverse: string = paramValue.split('').reverse().join('');

    if (paramValue.toLowerCase().match(reverse.toLowerCase()) !== null) {
        result = true;
    }
    console.log('Reversed: '+ reverse);
    
    return result;
}

let argum = "Minardo";
if (palindrome(argum))
    console.log(argum + " is a paindrome");
else
    console.log(argum + " is not a paindrome");
