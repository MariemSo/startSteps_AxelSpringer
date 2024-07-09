type Person = {
    name : string;
    age : number;
}

type ReadOnlyPerson = {
    readonly [k in keyof Person] : Person[k];
}

type PartialPerson = Partial<Person>

const john : ReadOnlyPerson = { name: "John", age: 30};

const partialJohn : PartialPerson = { name: "John"}