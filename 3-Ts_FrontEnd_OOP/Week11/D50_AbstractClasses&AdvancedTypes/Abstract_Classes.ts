abstract class Employee {
  constructor(private name: string) {}

  abstract getSalary(): number;

  get fullName(): string {
    return `${this.name}`;
  }

  compensationStatement(): string {
    return `${this.fullName} makes ${this.getSalary()} a month`;
  }
}

//!Contractor and FullTimeEmployee are subclasses

class FullTimeEmployee extends Employee {
  constructor(name: string, private salary: number) {
    super(name);
  }

  getSalary(): number {
    return this.salary;
  } // Must be implemented because of abstract
  // if not Error => Non-abstract class 'FullTimeEmployee' does not implement inherited abstract member getSalary from class 'Employee'.ts

  getEmployeeType() {
    console.log("Full-Time Employee");
  }
}

class Contractor extends Employee {
  constructor(name: string, private rate: number, private hours: number) {
    super(name);
  }

  getSalary(): number {
    return this.rate * this.hours;
  }
}

let john = new FullTimeEmployee("John", 2000);
let frank = new Contractor("Frank", 100, 160);
//! let employee = new Employee("Ahmad")
//=> Cannot create an instance of an abstract class.

console.log(john.compensationStatement());
console.log(frank.compensationStatement());

export {};
