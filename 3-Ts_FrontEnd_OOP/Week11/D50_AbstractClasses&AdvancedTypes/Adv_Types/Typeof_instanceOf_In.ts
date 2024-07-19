class Person {
  constructor(public name: string, public age: number) {}
}

const john = new Person("john", 30);

//Instance Of : check if the parameter received is part of some class

if (john instanceof Person) {
  console.log("John is an instance of Person");
}

// Type Of: Check if parameter received type is equal to some type:

if (typeof john === "object") {
  console.log("john is of type Object");
}

// In Operator: allows to check whether x property exists or not on the object received as parameter

if ("name" in john) {
  console.log("john has a 'name' property");
}
