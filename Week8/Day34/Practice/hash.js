// Task 1: Simple Hashing Function (Using Sum of Character Codes)

    function simpleHash(password){
        let hash=0
        for (let char of password){
            hash +=char.charCodeAt(0);
        }
        return hash
    }
    // console.log(simpleHash("a")) //97
    // console.log(simpleHash("b")) //98
    // console.log(simpleHash("c")) //99
    // console.log(simpleHash("abc")) //294

// Task 2: Simple Hashing Function (Using Multiplicative Hashing)
  
    function simpleMultiplicativeHash(password){
        let hash=0
        for (let i=0 ;i<password.length;i++){
            j=password.length-i-1
            // console.log(j)
            hash+= password.charCodeAt(i) *31**j;
            // hash += password.charCodeAt(i) * Math.pow(31,j);
            console.log("insideLoop "+ hash +" "+ i)
        }
        return hash
    }
    sumA=97*31**2
    sumB=98*31**1
    sumAB=sumA+sumB
    sumC=99*31**0
    sumABC= sumAB+sumC
    sum= sumA+sumB+sumC
    console.log("sum a:"+ sumA)
    console.log("sum b:" +sumB)
    console.log("sum a and b: " + sumAB)
    console.log("sum c: "+sumC)
    console.log("sum ab + c: " + sumABC)
    console.log("sum: "+sum)
    console.log("function Sum "+simpleMultiplicativeHash("abc"))
