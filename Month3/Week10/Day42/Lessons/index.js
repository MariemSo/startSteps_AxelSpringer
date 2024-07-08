"use strict";
let ids = [1, 2, 3, 4, 5]; //can only contain numbers
let names = ['Danny', 'Anna', 'Bazza']; //can only contain Strings
let options = [true, false, false]; //can only contain true or false
let books = [
    { name: 'Fooled By randomness', author: 'Nassim Taleb' },
    { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; //can only contains objects
ids.push(6);
ids.push('7'); // Error: arguments of type 'string' is not assignable to parameter of type 'number'
let person = ['Danny', true, 1];
person[0] = 100;
person[1] = { name: 'Sapiens' }; //Error - person array can´t contain objects 
