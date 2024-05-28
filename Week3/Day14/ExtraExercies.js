//! Task 7:
    
    //Brainstorming
        let arr1=[1,2,3,4,5,6]
        initialValue=1
        sum=arr1.reduce((accumulator, currentValue) => accumulator * currentValue,
        initialValue)
        console.log(sum)

    //  1. Write a JavaScript function named product that takes an array of numbers.
    //  2. Use the reduce() method with an arrow function to calculate the product of all
    // numbers in the array.
    //  3. Return the product.
    //  4. Call the product function with a sample array and print the result to the console.
        
        function product(arr){
           let result= arr.reduce((acc,curr)=>acc*curr)
            return result
        }
        console.log(product(arr1))
    
    
    //! Task 8:
    
    // Exercise:
    //  1. Define an array of objects where each object represents a person with properties name and age.
    //  2. Write a JavaScript function named addDecade that uses map() to add a new
    // property ageInTenYears to each person object, which should be their current age plus ten.
    //  3. Use an arrow function within map() to handle the transformation.

//         const person=[
//             {
//                 personName,
//                 age,
//             }]
        
//         const alice = new person("Alice",25)
//         const bob = new person("Bob",30)
//         const charlie = new person("Charlie",35)
// console.log(person)
//         function addDecade(person){
//              ageInThenYears+=person.age
//             person.map().push(ageInThenYears)
//         }   


    // Expected output:

    //  [
    //     { "name": "Alice", "age": 25, "ageInTenYears": 35 },
    //     { "name": "Bob", "age": 30, "ageInTenYears": 40 },
    //     { "name": "Charlie", "age": 35, "ageInTenYears": 45 }
    // ]
//  4. Return the new array and print it to the console.