//#region  Task 2: Recursion Exercise - Countdown Function
    // Objective:
        // Write a function that logs numbers in descending order from the given number down to zero using recursion.
        // This is how it would be done using a for-loop:
        function countDownForLoop(num) {
            for (let i = num; i >= 0; i--) {
                console.log(i);
            }
        }
        // countDownForLoop(7); // This will log numbers from 7 to 0

    // Instructions:
        //  Write a recursive function to achieve the same result.
            // ● Function Signature: 
                // function countDown(num) {}
            // ● Parameters:
                // ○ num - A positive integer.
            // ● Prints: Logs each number from num down to 0 to the console.
//#endregion
            function countDown(num){
                console.log(num)
                if(num===0){
                    return num
                }
                return countDown(num-1)
            }
            countDown(5)