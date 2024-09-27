// interface Hobbies {
//   hobby?: string[];
// }

// interface Person extends Hobbies {
//   name: string;
//   age: number;

//   greet?(phrase: string): void 
// }

// let users: Person[];


// users = [
//   {name: 'curtis', age:26, hobby: ['football']},
//   {name: 'dean', age:25, hobby: ['gaming']},
//   {name: 'william', age:26, hobby: ['skiing']},

// ]

// for(let user of users ){

//   console.log(`name: ${user.name} is age ${user.age} and their hobby is ${user.hobby}`);
// }


interface addFn{
  (a: number, b:number): number;
}

let add: addFn;

add = (a: number, b:number) => a+b;

interface Mood {
  angry: boolean;
  happy: boolean;
}
interface Job {
  role?: string
}
interface Greetable extends Mood, Job{
   readonly name: string;

  greet?(phrase: string): void 
}

class Person implements Greetable  {
  angry: boolean;
  happy: boolean;
  name: string;
  role?: string;
  
  constructor(angry: boolean, happy: boolean, name: string, role?: string){

    this.angry=angry;
    this.happy=happy;
    this.name=name;
    if(role){
      this.role=role;
    }

  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }

}

let user1: Greetable;

user1 = new Person(true, false, 'Curtis');

user1.greet('hello, my name is');
console.log(user1.happy);
console.log(user1.role);

// user1.name = 'Toby';
user1.role = 'Software Engineer';
console.log(user1.role);











