//! Task 2: Sum of Array Elements:
    function sumArray(arrayNum){
        let sum=0;
        for (let i=0;i<arrayNum.length;i++){
            sum+=arrayNum[i];
        }
        console.log(sum)
        return sum;
    }
    // console.log(sumArray([1,2,3,4]))
    sumArray([1,2,3,4])
    //Output: 10
//=============================================================================
//! 3.Task 3: Reverse Array Elements:
    // ● Write a JavaScript function named reverseArray that takes
    // an array of strings as a parameter.
    function reverseArray(stringsArr){
        let revesedArr=[]
        for(let i=stringsArr.length-1;i>=0;i--){
           revesedArr.push(stringsArr[i])
        }
        console.log(revesedArr)
        return revesedArr
    }
    reverseArray(["Head","toes","lips"])
    //Output: [ 'lips', 'toes', 'Head' ] 