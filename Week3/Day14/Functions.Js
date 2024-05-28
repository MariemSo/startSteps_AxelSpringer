//! Task 1: Function with Default Parameter:
    // ● Write a JavaScript function named greet that takes a parameter name 
    // and a default parameter greeting set to "Hello".

        function greet(name,greeting="hello"){
            // ● Inside the function,concatenate the greeting with the name and return the message.
            let message = `${greeting}, ${name}`
            return message
        }

    // ● Call the greet function with and without providing the greeting parameter,and print the result to the console.
        //* Print with Parameter
            console.log(greet("Dan","Welcome"))
            //Output: Welcome, Dan

        //* Print without Parameter
            console.log(greet())
            //Output: hello, undefined

//! 2.Task 2: Function with Rest Parameter:
    // ● Write a JavaScript function named sum that takes multiple parameters and calculates 
    //the sum of all provided numbers.
    // ● Use the rest parameter syntax(...) to collect all arguments into an array and loop through
    // them to calculate the sum.
    // ● Return the sum.
    
    let result=0;
    function sum(...numbers){
        for (number of numbers){
            result+=number
        }
        return result
    }
    console.log(sum(1,2,3,7,5))



    


    // ● Call the sum function with a sample list of numbers and print the result to the console.
