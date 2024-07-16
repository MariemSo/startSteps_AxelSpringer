// Arrow Functions:

//! 3. Task 3: Arrow Function for Addition:
    // ● Create a function called add that adds to numbers and returns the result
        function add(num){
            return num+=num
        }    
    // ● Convert the add function from a regular function to an arrow function.
        const addArrow =  (num) => num + num 
    
    // ● Call the arrow function with sample numbers and print the result to the console.
       console.log(addArrow(1))
       console.log(addArrow(4))
       console.log(addArrow(6))
       console.log(addArrow(5))
//! 4. Task 4: Arrow Function with Implicit Return:

    // ● Write an arrow function named cube that takes a number as a parameter and returns its cube 
    // (number raised to the power of 3) using implicit return syntax. (hint: Look up how to do exponentiation in JS).

        const cube = (x)=>(x**3)

    // ● Call the cube function with a sample number and print the result to the console.
        console.log(cube(4))