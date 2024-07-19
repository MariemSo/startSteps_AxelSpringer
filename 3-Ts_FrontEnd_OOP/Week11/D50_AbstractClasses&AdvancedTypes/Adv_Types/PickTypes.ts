interface PickType {
  id: number;
  firstName: string;
  lastName: string;
}

//! Pick utility allows you to create a new type from an existing model T by selecting some properties K of that type. ( Pick<T,K>)

function showPickType(args: Pick<PickType, "firstName" | "lastName">) {
  console.log(args);
}

showPickType({ firstName: "John", lastName: "Doe" });
//=> Output : { firstName: 'John', lastName: 'Doe' }

//! showPickType({id:1})
//Object literal may only specify known properties, and 'id' does not exist in type 'Pick<PickType, "firstName" | "lastName">'.
// * --------------------------------------------------------------
//! Omit utility is the opposite of the Pick type. And instead of selecting elements, it will remove K properties from the type T. ( Omit<T,K>)

function showOmitType(args: Omit<PickType, "firstName" | "lastName">) {
  console.log(args);
}

//! showOmitType({ firstName: "John", lastName: "Doe" });
//=> Error: Object literal may only specify known properties, and 'firstName' does not exist in type 'Omit<PickType, "firstName" | "lastName">'

showOmitType({ id: 1 });
//Output : { id: 1 }
