class Parent {
  firstName: string;

  constructor(firstName: string) {
    this.firstName = firstName;
  }

  processName() {
    console.log("processName method in parent class", this.firstName);
  }
}

class Child extends Parent {
  constructor(firstName: string) {
    super(firstName);
  }

  processName(): void {
    console.log("processName method in child class", this.firstName);
  }
}

let myObject = new Child("Kiran");
myObject.processName();

let myObject1 = new Parent("John");
myObject1.processName();
