var shuffle = function(nums, n) {
    let num1=nums.slice(0,n)
    let num2=nums.slice(n)
    let result=[]
    for (let i=0;i<n;i++){
        result.push(num1[i])
        result.push(num2[i])
           }
    return result
    
};
console.log(shuffle([2,5,1,3,4,7],3))

var getConcatenation = function(nums) {
    let nums2=nums
    result=nums.concat(nums2)
    console.log(result)
};
getConcatenation([1,2,3])

