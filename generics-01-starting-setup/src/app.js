// const names: Array<string> = ['Curtis', 'Dean', 'Eman'];
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var insertAtBeginning = function (array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
};
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray);
