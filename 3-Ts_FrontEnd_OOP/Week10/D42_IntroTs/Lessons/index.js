"use strict";
let ids = [1, 2, 3, 4, 5]; //can only contain numbers
let names = ['Danny', 'Anna', 'Bazza']; //can only contain Strings
let options = [true, false, false]; //can only contain true or false
let books = [
    { name: 'Fooled By randomness', author: 'Nassim Taleb' },
    { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; //can only contains objects
ids.push(6);
//! ids.push('7'); 
// Error: arguments of type 'string' is not assignable to parameter of type 'number'
let person = ['Danny', true, 1];
person[0] = 100;
//! person[1]= {name: 'Sapiens'} 
//Error - person array can´t contain objects 
let tuppleArr = ['Danny', 1, true];
//!tuppleArr[0] = 100 
//Error - Value at index 0 can only be a string
let age = '100';
age = 100;
age = {
    years: 100,
    months: 2,
};
let personObj;
personObj = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};
//! person.isProgrammer = 'Yes'; 
//Error should be a boolean
personObj = {
    name: 'John',
    location: 'Us'
};
let person1;
person1 = {
    name: 'Ahmad',
    age: 32,
};
let person2 = {
    name: 'Miou',
    age: 33,
    isProgrammer: true,
};
const employee1 = {
    name: "employee",
    age: 30,
    joiningDate: 12
};
function add(a, b) {
    return a + b;
}
const multiply = (a, b) => a * b;
const p1 = {
    name: 'John',
    id: 1
};
const p2 = {
    name: 'Delia',
    id: "2"
};
