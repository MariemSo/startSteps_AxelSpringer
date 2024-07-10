interface IPerson {
    name:string;
    lastName:string;
    age?:number;
    sayHi:(name:string) => string
}

let personOne: IPerson = {
    name:"Regi",
    lastName:"reg",
    age:26,
    sayHi:(n) => `Hi ${n}`
}

console.log(personOne.name)
console.log(personOne.lastName)
console.log(personOne.sayHi(personOne.name))

let personTwo: IPerson = {
    name:'Jim',
    lastName:'balkes',
    sayHi: (l)=> `Hello ${l}`
}

console.log(personTwo.name)
console.log(personTwo.lastName)


interface Person {
    age:number;
}

interface Musician extends Person {
    instrument :string;
}

var drummer = <Musician>{};

drummer.age = 27
drummer.instrument ="Drums"
console.log("Age: "+drummer.age)
console.log("Instrument: "+drummer.instrument)

interface IPerson1 {
    v1:number
}

interface IPerson2 {
    v2:number
}

interface Child extends IPerson1, IPerson2 {}

var Iobj : Child = {v1:23, v2:12}

console.log("Value 1: "+Iobj.v1+"Value 2: "+Iobj.v2)


interface Emplyee {   
    salary : number
}

interface Engineer extends Emplyee {
    techStack: string
    solvingProblems():void
}

interface Manager extends Emplyee {
    teamSize: number
    managin():void
}

let engineer : Engineer ={
    salary : 3000,
    techStack: "MERN",
    solvingProblems(){console.log("im An Engineer, And i am good at it")}
}

let manager : Manager ={
    teamSize:6,
    salary : 4000,
    managin(){ console.log("I don't mind being hated , I am Awsome and I take it all for the team xD")}
}

const printDetails= (employee:Emplyee):void=>{
    console.log(employee.salary)
    if((employee as Engineer).solvingProblems){
        const eng = employee as Engineer;
        eng.solvingProblems();
    }else if ((employee as Manager).managin){
        const mang = employee as Manager;
        manager.managin();
    }
}