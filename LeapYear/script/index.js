"use strict";
const isLeapYear = (year) => {
    return (year % 400 === 0) ? true :
        (year % 100 === 0) ? false : (year % 4 === 0);
};
let year = 2020;
let result = isLeapYear(year) ? " is a Leap Year" : " is not a Leap Year";
console.log("The year " + year + result);
