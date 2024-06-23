//#region Selection Sort Ascending
//  Task 1: Simple Selection Sort (Ascending Order)
    // Objective:
        //  Write a function to sort an array of integers in ascending order using the selection sort algorithm.
    // Instructions:
        // 1. Function Signature: function selectionSortAscending(arr)
        // 2. Parameters:
            // ○ arr - An array of integers.
        // 3. Return:
            // ○ The array sorted in ascending order.
    // Example:
        // For an input array [64, 25, 12, 22, 11]:
        // ● selectionSortAscending([64, 25, 12, 22, 11]) should return [11, 12,22, 25, 64].
//#endregion
function selectionSortAscending(arr){
    for (let i=0;i<arr.length-1;i++){
        let minIndex=i;
        for (let j=i+1;j<arr.length;j++){
            if (arr[minIndex]>arr[j]){
                minIndex=j
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    }
    return arr
}
console.log(selectionSortAscending([64, 25, 12, 22, 11]))

//#region Task 2: Simple Selection Sort (Descending Order)
    // Objective: 
    // Write a function to sort an array of integers in descending order using the selection sort algorithm.
    // Instructions:
        // 1. Function Signature: function selectionSortDescending(arr)
        // 2. Parameters:
            // ○ arr - An array of integers.
        // 3. Return:
            // ○ The array sorted in descending order.
    // Example:
        // For an input array [64, 25, 12, 22, 11]:
            // ● selectionSortDescending([64, 25, 12, 22, 11]) should return [64, 25, 22, 12, 11].
//#endregion
function selectionSortDescending(arr){
    for (let i=0;i<arr.length-1;i++){
        let minIndex=i;
        for (let j=i+1;j<arr.length;j++){
            if (arr[minIndex]<arr[j]){
                minIndex=j
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    }
    return arr
}
console.log(selectionSortDescending([64, 25, 12, 22, 11]))

//#region Task 3: Selection Sort with Iteration Count
    // Objective: 
        // Write a function to sort an array of integers in ascending order using the selection sort algorithm and return 
        // the number of iterations (passes through the array) required to sort the array.
    // Instructions:
        // 1. Function Signature: function selectionSortWithCount(arr)
        // 2. Parameters:
            // ○ arr - An array of integers.
        // 3. Return:
            // ○ An object with two properties: sortedArray (the sorted array) and iterations (the number of iterations).

    // Example:
        // For an input array [64, 25, 12, 22, 11]:
        // ● selectionSortWithCount([64, 25, 12, 22, 11]) should return {sortedArray: [11, 12, 22, 25, 64], iterations: 4 }.
        

//#endregion        
function selectionSortWithCount(arr){
    let iterations =0
    for (let i=0;i<arr.length-1;i++){
        let minIndex=i;
        for (let j=i+1;j<arr.length;j++){
            if (arr[minIndex]<arr[j]){
                minIndex=j
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        iterations++

    }
    return {SortedArray:arr, iterations:iterations}
}
console.log(selectionSortWithCount([64, 25, 12, 22, 11]))