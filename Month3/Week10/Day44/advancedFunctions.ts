function factorial(num: number):number{
    if(num <=0){
        return 1
    }else {
        return (num*factorial(num-1));
    }
}

console.log(factorial(6));


function greet(name:string ="Guest",age: number=30):string{
    return `Hello, ${name}! You are ${age} years old.`;
}

function sum(...numbers:number[]):number{
    return numbers.reduce((total, num) => total + num,0);
}

const result = sum(1, 2, 3, 4, 5) // result is 15

interface MathFunction {
    // (x:number, y: number):number;
    (...number:number[]):number
}

const add: MathFunction = (a, b) => a + b;
const substract: MathFunction = (a, b) => a - b;
const divide: MathFunction = (a, b) => a / b;
const multiply: MathFunction = (a, b) => a * b;

const  summManyNumbers1 = (...number:number[]):number => {
    return number.reduce((total, sum) => total + sum, 0)
}

const  summManyNumbers : MathFunction=(...number) => {
    return number.reduce((total, sum) => total + sum, 0)
}

const multiplyNumbers : MathFunction =(...number) =>{
    return number.reduce((total, sum) => total * sum, 1)
}

let sumMath = summManyNumbers1(10,20)
let sumMath2= summManyNumbers(1,2,3,4,5)
let multMath = multiplyNumbers(2,5,7)
let multMath2=multiplyNumbers(2, summManyNumbers(3,5,5))

console.log(sumMath)
console.log(sumMath2)
console.log(multMath)
console.log(multMath2)