"use strict";
const insertAtBeginning = (array, value) => {
    const newArray = [value, ...array];
    return newArray;
};
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray);
//# sourceMappingURL=app.js.map