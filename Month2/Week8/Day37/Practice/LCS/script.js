

// let stringOne ="abc"
// let stringTwo ="abcdd"
const lcsCalculation = (stringOne,stringTwo)=>{
    //getting the length:
    let lengOne = stringOne.length;//rows
    let lengTwo = stringTwo.length;//colums
    
    //Creating 2D array with the length of the two strings and fill them with 0
    const twoD_Arr = Array.from(Array(lengOne+1), () => new Array(lengTwo+1).fill(0)) 
    // const twoD_Arr3 = Array.from(Array(lengOne+1)) 
    // const twoD_Arr2 = Array.from({length: lengOne+1}) 
    
    // console.log(twoD_Arr3)
    // console.log(twoD_Arr2)


    // Loop through each character of the first string stringOne (from 1 to lengOne).
    for (let i = 1; i <= lengOne; i++){
        // Loop through each character of the second stringTwo (from 1 to lengTwo).
        for (let j = 1; j <= lengTwo; j++){
            //if string 1 and string 2 are a match 
            if(stringOne[i-1] === stringTwo[j-1]){
                twoD_Arr[i][j] = twoD_Arr[i-1][j-1]+1
                // console.log(twoD_Arr[i][j])
            }else{
                twoD_Arr[i][j] = Math.max(twoD_Arr[i-1][j], twoD_Arr[i][j-1]) 
                // console.log(twoD_Arr)
            }
        }
    }
    return  twoD_Arr[lengOne][lengTwo];
}
// console.log(lcsCalculation(stringOne,stringTwo))


const calculateLCS = ()=>{
    let stringOne = document.getElementById("str1");
    let stringTwo = document.getElementById("str2");
    result = lcsCalculation(stringOne,stringTwo)
    document.getElementById("result").innerText = result
}

