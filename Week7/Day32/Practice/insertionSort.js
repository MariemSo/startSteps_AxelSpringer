//#region Task 1: Simple Insertion Sort (Ascending Order)
    // Objective: 
        // Write a function to sort an array of integers in ascending order using the insertion sort algorithm.
    // Instructions:
        // ● Function Signature: function insertionSortAscending(arr)
        // ● Parameters:
                // ○ arr - An array of integers.
        // ● Return: The array sorted in ascending order.
    // Example: For an input array [12, 11, 13, 5, 6]:
        // ● insertionSortAscending([12, 11, 13, 5, 6]) should return [5, 6, 11, 12, 13].
//#endregion
    
    function insertionSortAscending(arr){
        for (let i=1; i<arr.length;i++){
            let j = i-1 //last index of the sorted array
            let current = arr[i]
            while (j>=0 && arr[j]>current){
                arr[j+1]=arr[j]
                j--
            }
            arr[j+1]=current
        }
        return arr
    }
    console.log(insertionSortAscending([12, 11, 13, 5, 6]))