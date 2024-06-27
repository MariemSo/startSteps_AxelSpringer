// Task 2: Sum of Numbers (Recursive)
    // Objective: 
        // Write a recursive function to calculate the sum of all positive integers from 1 to n. 
        // Implement the solution in three different ways: using Recursion, Memoization,and Tabulation.
    // Guide and Insight:
        // ● Understand the Problem:
        // ○ The task is to calculate the sum of all integers from 1 to n.
        // ○ Example: For n=5, the sum is 1+2+3+4+5=15.

    // A. Sum of Numbers with Recursion
    // B. Sum of Numbers with Memoization
    // C. Sum of Numbers with Tabulation

//---------------------------------------
function sumNumRecursion(n){
    if (n<0) return 0
    return n+sumNumRecursion(n-1)
}

console.log(sumNumRecursion(5))
 
//-----------------------------------------
function sumNumTab(n){

    let sumTab=[0]
    for ( let i=1 ; i<=n;i++){
        sumTab[i]=sumTab[i-1]+i
    }
    return  sumTab[n]
}
console.log(sumNumTab(5))

//-----------------------------------------
const sumMemo=[];

function smNumMemoization(n){
    if (n<=0){
        return 0;
    }                                                                       

    if (sumMemo[n]){
        return sumMemo[n];
    }

    sumMemo[n] = n+smNumMemoization(n-1)

    return sumMemo[n]
}

console.log(smNumMemoization(5))