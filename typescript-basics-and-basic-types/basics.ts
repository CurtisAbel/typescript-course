// core types
//number, string, boolean, object
const addTwoNumbers = (num1: [number, number], num2: number, showResult: boolean, phrase: string ) => {
  // if(typeof num1 !== 'number' || typeof num2 !=='number' ){
  //   throw new Error('is not type number') 
  // }  
  if(showResult){
    console.log(phrase, num1+num2);
  }else {
    return num1 + num2
  }

};

let numberOne: [number, number] = [5, 9];
let numberTwo: number = 10.8;
const printResult: boolean = true;
const resultPhrase: string = 'Result is: ';


const sum = addTwoNumbers(numberOne, numberTwo, printResult, resultPhrase);
