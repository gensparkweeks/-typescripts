const isLeapYear = (year:number) => {
    return (year % 400 === 0) ? true :
            (year % 100 === 0) ? false : (year % 4 === 0)
}

let year:number = 2020;
let result:string = isLeapYear(year) ? " is a Leap Year" : " is not a Leap Year";
console.log("The year "+year+ result);