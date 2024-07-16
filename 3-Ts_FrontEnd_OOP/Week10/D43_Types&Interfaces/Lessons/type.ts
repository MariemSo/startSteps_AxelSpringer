type PersonType = {
    name : string;
    age : number;
}

type ReadOnlyPerson = {
    readonly [k in keyof PersonType] : PersonType[k];
}

type PartialPerson = Partial<PersonType>

const john : ReadOnlyPerson = { name: "John", age: 30};

const partialJohn : PartialPerson = { name: "John"}