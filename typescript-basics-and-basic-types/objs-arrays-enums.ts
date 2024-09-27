// const person: {
// name: string;
// age: number;

// } = {
//   name: 'Curtis',
//   age:25
// };

// const person:{
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string, {}]
// } = {
//   name: 'Curtis',
//   age:25,
//   hobbies: ['football', 'chess', 'travelling', 'watching anime', 'gym', 'reading'],
//   role: [2, 'Software Developer', {}]
// };

type Person = {name: string, age: number, hobbies: any[], role: string }

enum Role {
  FOOTBALLER = 'FOOTBALLER',
  SOFTWARE_ENGINEER = 'SOFTWARE_ENGINEER',
  PT = 'PT',
  AUTHOR = 'AUTHOR',
  CHESS_GRAND_MASTER = 'CHESS_GRAND_MASTER'
}

//giving this the Person type we made above
const person: Person = {
  name: 'Curtis',
  age:25,
  hobbies: ['football', 'chess', 'travelling', 'watching anime', 'gym', 'reading',3,9],
  role: Role.CHESS_GRAND_MASTER
};

// person.role.push('Footballer');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user']

console.log(person.role);

let favouriteActivities: any[];

favouriteActivities=person.hobbies;

type Shop = { 
  food: [string[], {fruits: string[]}];
  games: {
  videoGames: string[]
}
  potato: number
}

const shop:Shop = {
  food: [
    [  'chicken', 'rice', 'peas', 'pasta'] ,
    {fruits: ['banana', 'apple', 'grapes']},
  ],
  games:
  {
    videoGames: ['tekken', 'gta', 'cyber punk', 'red dead redemption']
  },
  potato:78
  }

console.log(favouriteActivities);



for(const hobby of person.hobbies){
  console.log(hobby);
}