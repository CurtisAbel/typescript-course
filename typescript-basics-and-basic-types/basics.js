"use strict";
// core types
//number, string, boolean, object
const addTwoNumbers = (num1, num2, showResult, phrase) => {
    // if(typeof num1 !== 'number' || typeof num2 !=='number' ){
    //   throw new Error('is not type number') 
    // }  
    if (showResult) {
        console.log(phrase, num1 + num2);
    }
    else {
        return num1 + num2;
    }
};
let numberOne = [5, 9];
let numberTwo = 10.8;
const printResult = true;
const resultPhrase = 'Result is: ';
const sum = addTwoNumbers(numberOne, numberTwo, printResult, resultPhrase);
