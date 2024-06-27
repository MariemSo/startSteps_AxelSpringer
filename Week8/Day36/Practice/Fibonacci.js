// Dynamic Programming Fibonacci
    // Task 1: Fibonacci Sequence - Continue with Morning Exercises
        // Objective: 
            // Create functions for the Fibonacci sequence in three different ways: using
            // Recursion, Memoization, and Tabulation.
        // Guide and Insight:
            // ● Understand the Fibonacci Sequence:
                // ○ The Fibonacci sequence starts with 0 and 1.
                // ○ Each subsequent number is the sum of the previous two numbers.
                // ○ Example: 0, 1, 1, 2, 3, 5, 8, ...
            // A. Fibonacci with Recursion
                // ● A recursive function is a function that calls itself.
                // ● Base cases are necessary to stop the recursion.
            // B. Fibonacci with Memoization
                // ● Memorization involves storing the results of expensive function calls and reusing
                // them when the same inputs occur again.
            // C. Fibonacci with Tabulation
                // ● Tabulation involves solving the problem bottom-up, storing


function fibTabulation(n){
    const fib=[0,1]

    for (let i = 2; i <= n; i++){
        
        fib[i] = fib[i-1] + fib[i-2]

    }
    return fib
}

console.log(fibTabulation(5))

//--------------------------------------------------------
function fbnRecursive(n){
    if(n<2){
        return n
    }
    return fbnRecursive (n-1) + fbnRecursive (n-2)
}

console.log(fbnRecursive(6))

//--------------------------------------------------------

// Create an array to store the calculated Fibonacci numbers
const fibMemo=[]

function fibMemoisation(n){
    // Base case: return n if it is 0 or 1
    if(n <=1){
        return n;
    }

    // If the value is already computed and stored in the array, return it
    if (fibMemo[n]){
        return fibMemo[n]
    }

    // Compute the Fibonacci number recursively and store it in the array
    fibMemo[n] = fibMemoisation(n-1) + fibMemoisation(n-2)
    
    // Return the computed value
    return fibMemo[n]
}

console.log(fibMemoisation(5))