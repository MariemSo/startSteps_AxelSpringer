
//!#region Task 2: Swap Two Numbers in an Array
    // Objective: 
        // Write a function to swap two numbers in a two-element array in ascending order and then in descending order.
    // Instructions:
        // 1. Function Signature: function swapInAscending(arr) and function swapInDescending(arr)
        // 2. Parameters:
            // ○ arr - A two-element array of integers.
        // 3. Return:
            // ○ An array with the two numbers swapped in ascending or descending order.
    // Example:
        // For an input array [5, 2]:
            // ● swapInAscending([5, 2]) should return [2, 5].
            // ● swapInDescending([5, 2]) should return [5, 2] (if initially [2, 5], it should
        // return [5, 2]).
    // Step-by-Step Guidance:
        // 1. Check the order of the elements.
        // 2. Swap them if necessary to meet the desired order.
        // 3. Use a temporary variable to store the data in process in order to swap it.
//#region  Ascending Swap
        function swapInAscending(arr){
            if (arr.length!==2){
                return "can't swap more than two-element array "
            }
            else {
                if (arr[0]>arr[1]){
                    let temp=arr[0] ;
                    arr[0]= arr[1];
                    arr[1]=temp;
                    return arr
                }
                else{
                    return arr
                }
            }
        }
        console.log(`Swap [5,2] In Ascending : [${swapInAscending([5, 2])}]`)
//#endregion
//#region Descending Swap
    function swapInDescending(arr){
            if (arr.length!==2){
                return "can't swap more than two-element array "
            }
            else {
                if (arr[0]<arr[1]){
                    let temp=arr[0] ;
                    arr[0]= arr[1];
                    arr[1]=temp;
                    return arr
                }
                else{
                    return arr
                }
            } 
        }

        console.log(`Swap [2,5] In Descending : [${swapInDescending([2, 5])}]`)
        console.log(`Swap [5,2] In Descending : [${swapInDescending([5, 2])}]`)
//#endregion
//#region swap Three Element Array
    function sortThreeElements(arr){
        let newArr=[]

        swapInAscending([arr[0],arr[1]])

        swapInAscending([arr[1,arr[2]]])
        return arr
    }
    console.log(sortThreeElements([9, 4, 7]))
//#endregion