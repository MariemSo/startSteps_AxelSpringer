// define an interface called Cat
interface Cat {
  //  function
  //    |  return Type
  //    |    |
  meow(): void;
}

// define an interface called Dog
interface Dog {
  // Define a method called bark which returns void (no return value)
  bark(): void;
}
// Define a function
//    |            The function takes an argument named animal which can be of type Cat or Dog
//    |        _________|_________
//    |       |                  |
//    |           Arguments         type of return ()
const isCat = (animal: Cat | Dog): animal is Cat => {
  // Check if the property 'meow' exists in the animal object
  return "meow" in animal; // will return true if Cat
};

const pet: Cat | Dog = {
  meow: () => {
    console.log("Meow");
  },
  bark: () => {
    console.log("Wood");
  },
};
