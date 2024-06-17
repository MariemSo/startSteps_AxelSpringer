// Task 3: Sort a Three-Element Array
    // Objective: 
        // Write a function to sort a three-element array in ascending order. For now we will branch if statements instead of using for loop.
    // Instructions:
        // 1. Function Signature: function sortThreeElements(arr)
        // 2. Parameters:
            // ○ arr - A three-element array of integers.
        // 3. Return:
            // ○ An array with the three elements sorted in ascending order.

    // Example:
        // For an input array [9, 4, 7]:
        // ● sortThreeElements([9, 4, 7]) should return [4, 7, 9].
    // Step-by-Step Guidance:
        // 1. Compare the elements and swap them if they are in the wrong order.
        // 2. Repeat the comparisons until all elements are in ascending order.
            function sortThreeElements(arr){
                if (arr[0]>arr[1]){
                    let temp=arr[0] ;
                    arr[0]= arr[1];
                    arr[1]=temp;
                    return arr}
                if  (arr[1]>arr[2]){
                    let temp=arr[1] ;
                    arr[1]= arr[2];
                    arr[2]=temp;
                    return arr
                }
                }

            console.log(sortThreeElements([9, 4, 7]))