class MathOperation {
  add(a: number, b: number): number;
  add(a: string, b: string): string; //Overloading function add with new parameters
  add(a: boolean): boolean;

  //implementation
  add(a: any, b?: any): any {
    if (b) {
      return a + b;
    }
    return a;
  }
}
const mathObj = new MathOperation();

mathObj.add("Hello ", "World");
mathObj.add(1, 2);

// same function , different behavior (implementation) => Polymorphism
