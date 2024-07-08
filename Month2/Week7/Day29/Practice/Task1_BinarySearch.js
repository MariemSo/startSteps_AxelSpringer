//! Task 1: Find a Number in a Sorted Array
    // Array: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]

    // Objective: 
        // Write a function to find whether a given number is present in the array using binary search.
   
    // Instructions:
        // 1. Function Signature: function binarySearch(arr, target)
        // 2. Parameters:
            // ○ arr - A sorted array of integers.
            // ○ target - The number you want to find in the array.
        // 3. Return:
            // ○ true if the number is found in the array.
            // ○ false if the number is not found in the array.

    // Example:
        // ● For binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23), the function should return true.
        // ● For binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 7), the function should return false.
    
    // Step-by-Step Guidance:
        // 1. Initialize two variables low and high to the start and end indices of the array.
        function binarySearch(arr, target){
            let low = 0;
            let high = arr.length-1;
        // 2. Loop until low is less than or equal to high.
            for (i=0;i<arr.length;i++){
            // ○ Calculate the middle index mid as Math.floor((low + high) / 2).
            let mid=Math.floor((low+high)/2)
            let middleValue=arr[mid]
            // ○ If arr[mid] is equal to the target, return true.
            if (middleValue ===target){
                return true
            // ○ If arr[mid] is greater than the target, set high to mid - 1.
            }else if(middleValue<target){
                low = mid+1
            }
            // ○ If arr[mid] is less than the target, set low to mid + 1.
            else{
                high=mid-1
            }}
        // 3. If the loop ends without finding the target, return false.
            return false
        }
        console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23))
        console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 7))