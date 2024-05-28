//! 5. Task 5: Higher-order Function for Filtering:
    // ● Write a JavaScript function named filterEven that takes an array of numbers as a parameter.
        function filterEven(num){ 
            // ● Inside the function, use the filter function to filter out even numbers from the array. 
                let result=num.filter(number=>number%2===0)
            // ● Return the filtered array of even numbers.
            return result
        } 
        // ● Call the filterEven function with a sample array and print the result to the console.
        console.log(filterEven([1,2,3,4,5,6]))

//! 6. Task 6: Higher-order Function for Mapping:
    // ● Write a JavaScript function named double that takes an array of numbers as a parameter (or multiple numbers using
    // rest parameter).
        function double(...numbers){
            let newArr=numbers.map(num=>num*2)
            return newArr;
        }
        console.log(double(1,2,3,4,5,6))
    // ● Inside the function, use the map higher-order function to
    // double each number in the array.
    // ● Return the new array of doubled numbers.
    // ● Call the double function with a sample array (or numbers)
    // and print the result to the console. 