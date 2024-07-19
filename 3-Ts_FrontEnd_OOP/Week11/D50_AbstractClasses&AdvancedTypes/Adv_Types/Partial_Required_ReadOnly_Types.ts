//! Partial allows you to make all properties of the type T optional. It will add a ? mark next to every field.

interface EmployerType {
  id: number;
  firstName: string;
  lastName: string;
}

function showPartialType(args: Partial<EmployerType>) {
  console.log(args);
}

showPartialType({ id: 1 });
//Output:  { id: 1 }

showPartialType({ firstName: "Miou", lastName: "Ba" });
//Output:  { firstName: 'Miou', lastName: 'Ba' }

// * --------------------------------------------------------------------

//! The Required utility will make all properties required even if we make them optional first before using the utility

interface EmployeeType {
  id: number;
  firstName?: string;
  lastName?: string;
}

function showRequiredType(args: Required<EmployeeType>) {
  console.log(args);
}

showRequiredType({ id: 1, firstName: "Miou", lastName: "Ba" });
// Output: { id: 1, firstName: 'Miou', lastName: 'Ba' }

//! showRequiredType({ id: 1});
//=> Error Type '{ id: number; }' is missing the following properties from type 'Required<EmployeeType>': firstName, lastName

// * --------------------------------------------------------------------

//! The Required utility will make all properties required even if we make them optional first before using the utility

interface PersonType {
  id: number;
  name: string;
}

function showReadOnlyType(args: Readonly<PersonType>) {
  //! args.id=4
  //=> Error :Cannot assign to 'id' because it is a read-only property.
  console.log(args);
}
let person: PersonType = { id: 10, name: "Bill" };
showReadOnlyType(person);

let id = (person.id = 20);
console.log(id);
