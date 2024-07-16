let fibRecursive=0
const fib = (n)=>{
    if (n<=1){
        return n
    }
    fibRecursive +=1;
    return fib (n-1) + fib (n-2)
}


const fibMemo=[];
let fibDPIteration =0
function fibDp(n){
    if(n<=1){
        return n;
    }

    if(fibMemo[n]){
        return fibMemo[n]
    }
    fibDPIteration +=1 
    fibMemo[n] = fib(n-1)+fib(n-2);
    return fibMemo[n]
}

let fibTSteps = 0;
const fibTabulation = (n)=>{
    const fibTable = [0,1];
    for ( let i = 2; i <=n ; i++){
        fibTable[i] = fibTable[i-1] + fibTable[i-2];
        fibTSteps += 1
    }
    return fibTable[n]
}

const factorial = (n)=>{
    let result=1
    for ( i=2;i <=n;i++){
        result*=i
    }
    return result
}
 
const factorialRecursive = (n)=>{
    if (n<=1){
        return 1
    }
    return n*factorialRecursive(n-1)
}
console.log(factorialRecursive(5))
console.log(factorial(5))

const calculateFib =()=>{
    const number = document.getElementById("number").value;
    const result = fib(parseInt(number));
    const resultDP = fibDp(parseInt(number));
    const resultTab = fibTabulation(parseInt(number));
    document.getElementById("result").innerText =`The ${number}th Fibonacci number with Recursive  is : ${result} with total Iteration of ${fibRecursive}`
    document.getElementById("resultDP").innerText =`The ${number}th Fibonacci number  with Memorisation is : ${resultDP} with total Iteration of ${fibDPIteration}`
    document.getElementById("resultTab").innerText =`The ${number}th Fibonacci number with Tabulation  is : ${resultTab} with total Iteration of ${fibTSteps}`
}

