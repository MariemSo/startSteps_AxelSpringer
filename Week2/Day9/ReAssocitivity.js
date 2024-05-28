var x = 1; //3
var y = 2; 
var z = 3;

console.log(x*=z) //3
console.log(y+=x) //5

console.log(y+=x*= z);

console.log("separating",y+=x)
//y*= z
//y = y*z