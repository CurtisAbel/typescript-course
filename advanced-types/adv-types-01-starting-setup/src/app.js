var _a;
var employee = {
    name: 'Curtis',
    privileges: ['create-server'],
    startDate: new Date()
};
console.log(employee.name);
var shop = {
    name: 'Nike',
    industry: 'athletic footwear and apparel corporation',
    product: ['Tracksuits', 'Trainers', 'shorts', 'football boots']
};
function add(n1, n2) {
    if (typeof n1 === 'string' || typeof n2 === 'string') {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
var result = add('Curtis', 'Abel');
result.split(' ');
var fetchUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company ' }
};
console.log((fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) && ((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title));
var userInput = '';
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
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
