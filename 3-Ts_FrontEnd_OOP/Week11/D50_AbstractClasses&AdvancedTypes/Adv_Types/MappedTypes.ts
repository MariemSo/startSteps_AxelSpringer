//! Mapped Types

type StringMap<T> = {
  [P in keyof T]: string;
};

function showTypeStrMap(arg: StringMap<{ id: number; name: string }>) {
  console.log(arg);
}

//! showTypeStrMap({id:1,name:"test"})
//=> Error: Type 'number' is not assignable to type 'string'

showTypeStrMap({ id: "testId", name: "this is a test" });
//=> Output: { id: 'testId', name: 'this is a test' }
