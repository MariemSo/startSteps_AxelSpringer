// [0,1,1,2,4,7,13,24,44,81,149]
//! 0 1 2 3 4 5  6 7  8  9  10
//--------------------------------------------------------
    function tribTabulation(n){
        const trib=[0,1,1]

        for (let i = 3; i <= n; i++){
            
            trib[i] = trib[i-1] + trib[i-2] + trib[i-3]

        }
        return trib[n]
    }
    console.log(tribTabulation(9)) 
    console.log(tribTabulation(2)) 
    console.log(tribTabulation(1)) 

//--------------------------------------------------------
    let tribMemoisation = (n, tribMemo=[])=>{
        if (n === 0) return 0
        if (n === 2 || n === 1) return 1
    

        if (tribMemo[n]){
            return tribMemo[n]
        }

        tribMemo[n]= tribMemoisation(n-1, tribMemo) + tribMemoisation(n-2, tribMemo) +tribMemoisation(n-3, tribMemo)

        return tribMemo[n]
    }

    console.log(tribMemoisation(9))
    console.log(tribMemoisation(1))
    console.log(tribMemoisation(2))

//--------------------------------------------------------
    function triRecursive(n){
        if (n === 0) return 0
        if (n === 2 || n === 1) return 1
    
        return triRecursive (n-1) + triRecursive (n-2) + triRecursive (n-3) 
    }

    console.log(triRecursive(9))
    console.log(triRecursive(2))
    console.log(triRecursive(1))
// ---------------------------------------------
function measureExecutionTime(algorithm, input, iterations = 1000) {
    let totalTime = 0;
    let result;
    for (let i = 0; i < iterations; i++) {
        const start = performance.now();
        if (algorithm === tribMemoisation) {
            result = algorithm(input, []); // Pass a new memo object
        } else if (algorithm === tribTabulation) {
            result = algorithm(input); // Fresh state for tabulated version
        } else {
            result = algorithm(input); // For recursive version
        }
        const end = performance.now();
        totalTime += (end - start);
    }
    const averageTime = totalTime / iterations;
    return { time: averageTime, result };
}
//     function measureExecutionTime(algorithm, input) {
//         const start = performance.now();
//         const result= algorithm(input);
//         const end = performance.now();
//         console.log(result)
//         return end - start;
//     }   

// ----------------------Time Recursive Tribonacci ------------------------

    function analyzeRecursiveTribonacci() {
    let n = 15; 
    const { time, result } = measureExecutionTime(triRecursive, n);
    console.log("Recursive Tribonacci:"+ result);
    document.getElementById("resultRecursive").innerText=`Execution Time of Recursive Tribonacci: ${time} ms`
    console.log(`Execution Time: ${ time} ms`);
}

// ---------------------Time Memoisation Tribonacci-------------------------

function analyzeMemoisationTribonacci() {
    let n = 35; 
    const { time, result } = measureExecutionTime(tribMemoisation, n);
    console.log("Memoisation Tribonacci of n :" + result);
    document.getElementById("resultMemoisation").innerText=`Execution Time Memoisation Tribonacci: ${time} ms`

    console.log(`Execution Time: ${time} ms`);
}

// ---------------------Time Tabulation Tribonacci-------------------------

function analyzeTabulationTribonacci() {
    let n = 35; 
    const { time, result } = measureExecutionTime(tribTabulation, n);
    console.log("Tabulation Tribonacci:"+ result);
    document.getElementById("resultTabulation").innerText=`Execution Time Tabulation Tribonacci: ${time} ms`
    console.log(`Execution Time: ${time} ms`);
}
