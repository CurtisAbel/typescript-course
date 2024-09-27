type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

interface Brand {
  name: string;
  industry: string;
}

interface Product {
  product: string[];

}

type ElevatedEmployee = Admin & Employee;

type RetailShop = Brand & Product;

const employee: ElevatedEmployee = {
  name: 'Curtis',
  privileges: ['create-server'],
  startDate: new Date()

}

console.log(employee.name);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const shop: RetailShop = {
  name: 'Nike',
  industry: 'athletic footwear and apparel corporation',
  product: ['Tracksuits', 'Trainers', 'shorts', 'football boots']
}



function add(a: number, b:number ): number;
function add(a: string, b:string ): string;
function add(a: number, b:string ): string;
function add(a: string, b:number ): string;
function add(n1: Combinable, n2:Combinable  ){
  if(typeof n1 === 'string' || typeof n2 === 'string'){
    return n1.toString()+ n2.toString();
  }
  return n1 + n2;
}

const result = add('Curtis','Abel');
result.split(' ');

const fetchUserData  = {
  id: 'u1',
  name: 'Max',
  job: {title: 'CEO', description: 'My own company ' }
}

console.log(fetchUserData?.job && fetchUserData?.job?.title);

const userInput = '';

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployee(emp: UnknownEmployee) {
// console.log('name: ' + emp.name);
// if('privileges' in emp){
//   console.log('privileges: ' + emp.privileges);
// }
// if('startDate' in emp){
//   console.log('Start date: ' + emp.startDate);
// }
// }

// console.log({name: 'Harry', startDate: new Date});


// class Car {
//   drive() {
//     console.log('driving...');
//   }
// }
// class Truck {
//   drive() {
//     console.log('driving a truck...');
//   }

//   loadCargo(amount: number){
//     console.log('loading cargo ...' + amount);

//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if(vehicle instanceof Truck){
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type:'horse';
//   groundSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal){
//  let speed;

//   switch(animal.type) {
//     case 'bird':
//     speed = animal.flyingSpeed;
//     break;

//     case 'horse':
//     speed = animal.groundSpeed;
//     break;
//   }

//   console.log('Moving at speed: ' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 100   })


// type Picadilly = {
//   stations: string[];
//   driver: boolean;

// }

// type Dlr = {
//   stations: string[];
//   electric: boolean;
// }



// type Train = Picadilly | Dlr;

// function TrainService(train: Train){
//   console.log(train.stations);
//   if('driver' in train){
//     console.log(train.driver);
//   }
//   if('electric' in train){
//     console.log(train.electric);
//   }
// }


// TrainService({stations:['Manor House', 'Finsbury Park', 'Arsenal'], driver: true})

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = document.getElementById('user-input');
// if(userInputElement) {
//   (userInputElement as HTMLInputElement).value = "hi there"
// }

// interface ErrorCOintainer {
//   [prop: string]: string;
// }

// const erroBag: ErrorCOintainer = {
//   email: 'Not a valid email!',
//   username: 'Must start with a capital character'
// };

