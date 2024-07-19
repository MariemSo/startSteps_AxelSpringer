//! Generic Type :

interface GenericType<T> {
  id: number;
  name: T;
}

function showTypeGeneric(args: GenericType<string>) {
  console.log(args);
}

showTypeGeneric({ id: 1, name: "test" });
//=>  Output : { id: 1, name: 'test' }

function showTypeGeneric2(args: GenericType<number>) {
  console.log(args);
}

showTypeGeneric2({ id: 1, name: 4 });
//=> Output : { id: 1, name: 4 }

//* -----------------------------------------------------

interface GenericType2<T, U> {
  id: U;
  name: T;
}

function showTypeGeneric3(args: GenericType2<string, number>) {
  console.log(args);
}

showTypeGeneric3({ id: 120, name: "Name" });
//=> Output: { id: 120, name: 'Name' }

function showTypeGeneric4(args: GenericType2<string[], number>) {
  console.log(args);
}

showTypeGeneric4({ id: 120, name: ["Name", "is", "a", "test"] });
//=>  Output { id: 120, name: [ 'Name', 'is', 'a', 'test' ] }
