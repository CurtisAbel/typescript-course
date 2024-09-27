"use strict";
//use unknown when you are unsure of what type will be assigned to it
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
//this won't compile, as the type is unknown
// userName=userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}
//never types is intended to never return anything
function generateError(message, code) {
    throw { message: message, errorCode: code };
    //while(true){}
}
generateError('An error occured', 500);
