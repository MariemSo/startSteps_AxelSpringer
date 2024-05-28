let numbers = [10,5,8,15,3]
let max= numbers[0];
for(let i =1;i<numbers.length;i++){
    if(numbers[i]>max){
        max=numbers[i]
    }
}
console.log("Maximum number: ",max);
console.log("Maximum number: ",Math.max(...numbers))