
function reverse(arg: string){
    let result: string = '';
    let i:number; 
    for( i=0; i < arg.length; i++){
        result = arg.charAt(i) + result;
    }

    return result;
}

const reverseConst = (arg: string) => {
    let result: string = '';
    let i:number; 
    for( i=0; i < arg.length; i++){
        result = arg.charAt(i) + result;
    }

    return result;
}

console.log(reverse('odraniM'));

console.log(reverseConst('kraPsneG'));


