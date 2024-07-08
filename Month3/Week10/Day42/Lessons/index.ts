let ids:number[] = [1,2,3,4,5] //can only contain numbers
let names: string[] = ['Danny', 'Anna', 'Bazza'];//can only contain Strings
let options: boolean[] = [true, false, false]; //can only contain true or false
let books: object[] =[
    { name: 'Fooled By randomness', author:'Nassim Taleb'},
    { name: 'Sapiens', author:'Yuval Noah Harari'},
]; //can only contains objects

ids.push(6);
//! ids.push('7'); 
// Error: arguments of type 'string' is not assignable to parameter of type 'number'

let person: (string| number| boolean)[] = ['Danny', true, 1];

person[0] =100;
//! person[1]= {name: 'Sapiens'} 
//Error - person array can´t contain objects 

let tuppleArr: [string, number, boolean] = ['Danny',1,true];
//!tuppleArr[0] = 100 
//Error - Value at index 0 can only be a string

let age:any ='100'

age = 100;

age = {
    years: 100,
    months: 2,
}

let personObj:{
    name: string;//required
    location: string;//required
    isProgrammer?: boolean; //optional
}

personObj ={
    name:'Danny',
    location:'UK',
    isProgrammer: true,
}

//! person.isProgrammer = 'Yes'; 
//Error should be a boolean

personObj = {
    name:'John',
    location :'Us'
}
// Without ? in isProgrammer => Error : missing the isProgrammer Property

interface Person {
    name: string;//required
    age: number;//required
    isProgrammer?: boolean; //optional
}

let person1 : Person;

person1 = {
    name:'Ahmad',
    age: 32,
}

let person2 : Person= {
    name: 'Miou',
    age: 33,
    isProgrammer: true,
}

interface Employee extends Person {
    joiningDate:number;
}

const employee1: Employee ={
    name:"employee",
    age: 30,
    joiningDate : 12
}

function add(a:number, b:number):number {
    return a + b; 
}

const multiply = (a: number, b: number): number => a * b;

type StringOrNumbers = string | number;

type PersonObject = {
    name: string;
    id : StringOrNumbers;
};

const p1: PersonObject = {
    name: 'John',
    id:1
}

const p2: PersonObject ={
    name:'Delia',
    id: "2"
}

