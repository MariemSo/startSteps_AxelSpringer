// <!-- Task 1: Implement a Set-Based Operator Management System for a Basic JavaScript Calculator App

// Objective:
// Create a simple JavaScript implementation that uses the Set data structure to manage and validate basic operators (+, -, *, /) supported by a basic calculator app.

// Steps:
// Define Supported Operators:
// Initialize a set for operators.
 let operators = new Set()

 operators.add("+");
 operators.add("-");
 operators.add("*");
 operators.add("/");

 console.log(operators)
// Implement Validation Function:
// Create a function to check if a given input is a valid operator.
// Use the Validation Function:
// Integrate the validation function into the main part of your calculator app.

// Implement Basic Operations:
// Create a function to perform basic operations.


// Function to check if the input is a valid operator
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

// Function to perform basic operations
function calculate(a, operator, b) {  
    if (isOperator(operator)){
        let sum;
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
        return sum;
    }
    else {
        return "inputNotValid";
    }
    }


 // Example usage
function testCalculator() {
    console.log(calculate(2, '+', 3)); // 5
    console.log(calculate(5, '-', 2)); // 3
    console.log(calculate(4, '*', 3)); // 12
    console.log(calculate(8, '/', 2)); // 4
    console.log(calculate(8, '^', 2)); // Invalid operator!
}
testCalculator()