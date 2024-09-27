class Department {

  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string,public n:string) {
    // this.name=n;
    // this.id=id;
  }

  describe(this: Department){
    console.log(`Department: id:${this.id} name:${this.n}`);

  }

  addEmployee(employee: string){
    this.employees.push(employee);
  }

  printEmployeeList(){
    console.log(this.employees.length);
    console.log(this.employees);
  }


}

const technology = new Department('tech', 'c45331');

technology.describe();
technology.addEmployee('Rik');
technology.addEmployee('Josh');
technology.addEmployee('Fynn');
// tech.employees[4] ='seb';
console.log(technology.printEmployeeList());
