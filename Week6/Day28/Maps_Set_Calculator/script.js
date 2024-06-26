//#region Task 1: Implement a Set-Based Operator Management System for a Basic JavaScript Calculator App

// Objective:
// Create a simple JavaScript implementation that uses the Set data structure to manage and validate basic operators (+, -, *, /) supported by a basic calculator app.

// Steps:
// Define Supported Operators:
// Initialize a set for operators.
// Implement Validation Function:
// Create a function to check if a given input is a valid operator.
// Use the Validation Function:
// Integrate the validation function into the main part of your calculator app.
// Implement Basic Operations:
// Create a function to perform basic operations.
// Function to check if the input is a valid operator
//#endregion
//#region Task 2: Implement a History Management System Using Map()
// Objective:
// Extend the basic calculator app to store the history of operations using a Map and display this history on the web page.

// Steps:
// Create a Map for Storing History:
// Initialize a Map to store operations history.
// Extend the Calculation Function:

// Modify the calculate function to store each operation in the history map.
// Display History:

// Create a function to display the history on the web page. 

//History entry should follow the pattern: `${a} ${operator} ${b} = ${result}`
//#region 

 let operators = new Set()

 operators.add("+");
 operators.add("-");
 operators.add("*");
 operators.add("/");

 console.log(operators)

function isOperator(input) {
    // let valid= false;
    // operators.forEach(element => {
    // if(element===input){
    //     valid =true;
    // }
    // }); 
    // return valid ;
    return operators.has(input)       
}

let histories = new Map();

// Function to perform basic operations
function calculate(a, operator, b) {
    if (!isOperator(operator))
    {
        return "Invalid operator!";
    }
    let sum ;    
    switch (operator){
        case "+":
            sum = a+b;
            break;
        case "-":
            sum= a-b;
            break;
        case "*":
            sum= a*b;
            break;
        case "/":
            sum=a/b;
            break;
    }
    
    histories.set(histories.size+1,`${a} ${operator} ${b} = ${sum}`)  
    return sum;
}

function displayHistory(){
    histories.forEach((v,k) => {
       console.log(v)
    });
} 
// Example usage
function testCalculator() {
    console.log(calculate(2, '+', 3)); // 5
    console.log(calculate(5, '-', 2)); // 3
    console.log(calculate(4, '*', 3)); // 12
    console.log(calculate(8, '/', 2)); // 4
    console.log(calculate(8, '^', 2)); // Invalid operator!
     displayHistory()

}
testCalculator()

