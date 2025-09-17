// const names: Array<string> = ['Curtis', 'Dean', 'Eman'];

// const promise: Promise<string> = new Promise ((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000)
// })

// promise.then(data => {
//   data.split(' ');
// })

// function merge<T, U>(objA: T, objB: U) {

//   return Object.assign(objA, objB)

// }

// const mergedObj = merge<{name: string, hobbies: string[]}, {age: number}>({name: 'Curtis', hobbies:['chess', 'football']}, {age: 30})
// console.log(merge({name: 'Curtis'}, {age: 30}));

const insertAtBeginning = <T>(array: T[], value: T) => {
  const newArray = [value, ...array];
  return newArray;

}

const demoArray: number[] = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray);