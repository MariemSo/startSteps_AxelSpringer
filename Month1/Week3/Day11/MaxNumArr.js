//! Bonus Task: Task 6 - Finding Maximum Number in an Array:
// ● Write a JavaScript function named findMax that takes an array of numbers as a parameter.
    function findMax(arr){
        for (var i=0;i<arr.length;i++){
            max=arr[0];
            if (arr[i]>max){
                max=arr[i]
            }
        }
    //     let i =1;
    //     while(i<arr.length){
    //         max=arr[0];
    //         if (arr[i]>max){
    //             max=arr[i]
    //         }
    //         i++
    //     }
        return max
    }
// ● Call the findMax function with a sample array and print the result to the console.
    console.log(findMax([1,2,3])) 
    //Output : 3
    console.log(findMax([-1,-2,-3]))
    //Output: -1
    console.log(findMax([-1,-2,-3,100]))
    //Output 100