var age = 15;

if(age>15){
    console.log("You'r not permitted to enter");
}
else{
    console.log("You're permitted to enter");
}
//-------------------------------------------
let userAge = 25 ;
let LegalDrinkingAge = 21;

//checking if the user´s age is greater than the legal drinking age
if (userAge>= LegalDrinkingAge){
    console.log("You are old enough to drink alcohol!");
}
else{
    console.log("Sorry, you are not old enough to drink yet.");
}

let retirementAge= 65;

//Checking if the user´s age is less than the retirement age
if(userAge<retirementAge) {
    console.log("You have more years until retirement.");
}
else if (userAge === retirementAge){
    console.log("You are at retirement age. Enjoy!");
}
else{
    console.log("You are already past the retirement age.");
}
//------------------------------------------------------

//Difference Between ==  and === In JS

// the "==" convert the type than check the value
// the "===" doesn´t convert the type, check the type and the value

//------------------------------------------------------
console.log(2+2)
//Output 4

console.log("2"+"2")
//Output "22"

console.log(2+2-2);
//Output  2

console.log("2"+"2"-"2")
//("2" + "2") - "2" 
// 22 - 2 
//Output 20

console.log("2"-"2") 
//Output 0
// when - is used on number type string JS automatically convert them to numbers

//-----------------------------------------------
let givenAge = -15

if (givenAge>18){
    console.log("You are an Adult");
}
else if (givenAge <= 18 && givenAge >= 13){
    console.log("You are an Young Adult");
}
else if (givenAge < 13 && givenAge >= 1){
    console.log("You are a Kid");
}
else if (givenAge===0){
    console.log("You are a Baby");
}
else {
    console.log("You are an from The future - Error!");
}

//---------------------------------------------
let day = 1;

if (day ===1){
    console.log("It's Monday!");
}else if (day ===2){
    console.log("It's Tuesday!");
}else if (day ===3){
    console.log("It's wednesday!");
}else if (day ===4){
    console.log("It's Thursday!");
}else if (day ===5){
    console.log("It's Friday!");
}else if (day === 6 || day === 7){
    console.log("It's The Weekend 🎉🎉🎉!");
}
else{
    console.log("It would be nice to Have more than 7 day !! 🥲");
}
//---------------------------------------
function greet(name = 'Guest') {
    console.log(`Hello,${name}`);
 }
greet();
greet("John")