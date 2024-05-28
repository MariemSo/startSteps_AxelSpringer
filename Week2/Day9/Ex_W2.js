//! 1. Variables and Arithmetic Operations:
    // ● Declare three variables num1, num2, and result.

        let num1;
        let num2;
        let result;

    // ● Assign numerical values to num1 and num2.

        num1 = 5;
        num2 = 2;

    // ● Perform arithmetic operations (addition, subtraction, multiplication, division) using num1 and num2, and store the
    // results in result.
    // ● Print the results to the console.

        //* addition 
        result = num1 + num2;
        console.log(`the Addition of the num1 and num2 is ${result}` ); //=> 7

        //* subtraction
        result = num1 - num2;
        console.log(`the subtraction of the num1 and num2 is ${result}`); //=> 3

        //* multiplication
        result = num1 * num2;
        console.log(`the multiplication of the num1 and num2 is ${result}`); //=> 10

        //* division
        result = num1 / num2;
        console.log(`the division of the num1 and num2 is ${result}`); //=> 2.5

//------------------------------------------------------------------------------------------------------
// ! 2. String Interpolations and Type Coercion:
    // ● Declare a variable name and assign it a string value.

        let name = "Miou";
    
    // ● Declare a variable age and assign it a numerical value.
    
        	let age = 32;

    // ● Use string interpolation to create a message that includes both the name and age 
    // e.g.,"Hello, my name is [name] and I am [age] years old."

            let introduction = `Hello, my name is ${name} and I am ${age} years old`;

    // ● Convert the numerical age variable to a string using type coercion
    // before interpolating it into the message.

            let ageToString= age.toString(); 

            let introduction2 = `Hello, my name is ${name} and I am ${ageToString} years old`;


    // ● Print the message to the console.
            console.log(introduction2);

//------------------------------------------------------------------------------------------------------
 // ! 3. Type Checking and Type Coercion:
    // ● Declare a variable value and assign it a numerical value.

        let variable = 10;

    // ● Use the typeof operator to check the data type of the value variable and print the result to the console.

        console.log(typeof variable);

    // ● Convert the value variable to a string using type coercion.

        let coercion = variable.toString();

    // ● Use the typeof operator again to verify that the data type of value has changed to string and print the 
    // result to the console.
        
    console.log(typeof coercion);

//! 4. Documenting Functionalities using Comments:
    // ● Write a JavaScript script that calculates the area of a rectangle.
    // ● Calculate the area using the formula area = length * width.
    // ● Use comments to document the purpose of the code, parameters,and the formula used for calculation.

        //* Calculating Rectangle´s Area
        //* the formula is the following : length * width.

            // first we declare the length
            let length= 10;
            // then we declare the width
            let width = 2;
            // finally we calculate by assigning the result to a variable called area
            let area = length * width;
            // and last make sure it worked by printing it to the console
            console.log(area);
