// interface Hobbies {
//   hobby?: string[];
// }
var add;
add = function (a, b) { return a + b; };
var Person = /** @class */ (function () {
    function Person(angry, happy, name, role) {
        this.angry = angry;
        this.happy = happy;
        this.name = name;
        if (role) {
            this.role = role;
        }
    }
    Person.prototype.greet = function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name));
    };
    return Person;
}());
var user1;
user1 = new Person(true, false, 'Curtis');
user1.greet('hello, my name is');
console.log(user1.happy);
console.log(user1.role);
// user1.name = 'Toby';
user1.role = 'Software Engineer';
console.log(user1.role);
