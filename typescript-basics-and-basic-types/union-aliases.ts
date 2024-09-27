type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'

const combine = (input1: Combinable , input2: Combinable, resultConversion: ConversionDescriptor) => {
  const result;
  if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
    result  = +input1 + +input2;
  } else {
    result = input1.toString()+input2.toString()
  }

  // if(resultConversion === 'as-number'){
  //   return +result;
  // }else{
  //   return result.toString();

  // }
  return  result;
};

const combinedAges = combine(30,26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30','26', 'as-number');
console.log(combinedStringAges);

const combinedName = combine('Max','Anna', 'as-text');
console.log(combinedName);

// const combineNameAndNumber = combine('Josh', 56)
// console.log(combineNameAndNumber);


type User = { name: string } | string;
let u1: User = {name: 'Max'};
u1 = 'Michael';
console.log(u1);