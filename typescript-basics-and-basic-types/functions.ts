const add = (n1: number, n2: number): number => {
  return n1+n2;
}

//we use void if a function doesn't have a return statement
const printResult = (num: number): void => {
console.log('Result: ' + num);
}
//undefined can be used if we are returning nothing
// const printResult = (num: number): undefined => {
// console.log('Result: ' + num);
// return;
// } 

const addAndHandle= (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1+n2;
  cb(result);
}

printResult(add(4, 5));

//whatever we store inside combinedValues has to be a function
// let combinedValues: Function;

//this only accept a function with two parameters that returns a number
let combinedValues: (a: number, b:number) =>  number;

combinedValues = add;

//this won't compile, as combinedValues only accepts two parameters that is a number that returns number
// combinedValues = printResult;

//this won't compile because it is a function type not a number
// combinedValues = 5;

console.log(combinedValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});

