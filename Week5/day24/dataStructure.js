

var twoSum = function(nums, target) {
    for (var i=0;i<nums.length;i++){
        for (var j=1;j<nums.length;j++){
            sum= nums[i]+nums[j]
            if (sum===target){
                return [i,j]
            }
            else{
                return "nothing matches the target"
            }
        }
    }
};
console.log(twoSum([6,2,6,4],5))

var removeDuplicates = function(nums) {
   
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))