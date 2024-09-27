"use strict";
// const person: {
// name: string;
// age: number;
var Role;
(function (Role) {
    Role["FOOTBALLER"] = "FOOTBALLER";
    Role["SOFTWARE_ENGINEER"] = "SOFTWARE_ENGINEER";
    Role["PT"] = "PT";
    Role["AUTHOR"] = "AUTHOR";
    Role["CHESS_GRAND_MASTER"] = "CHESS_GRAND_MASTER";
})(Role || (Role = {}));
//giving this the Person type we made above
const person = {
    name: 'Curtis',
    age: 25,
    hobbies: ['football', 'chess', 'travelling', 'watching anime', 'gym', 'reading', 3, 9],
    role: Role.CHESS_GRAND_MASTER
};
// person.role.push('Footballer');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user']
console.log(person.role);
let favouriteActivities;
favouriteActivities = person.hobbies;
const shop = {
    food: [
        ['chicken', 'rice', 'peas', 'pasta'],
        { fruits: ['banana', 'apple', 'grapes'] },
    ],
    games: {
        videoGames: ['tekken', 'gta', 'cyber punk', 'red dead redemption']
    },
    potato: 78
};
console.log(favouriteActivities);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
