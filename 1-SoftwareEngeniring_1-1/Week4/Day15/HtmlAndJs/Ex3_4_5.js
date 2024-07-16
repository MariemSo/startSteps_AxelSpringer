//! Exercise 3
// Get the input element where numbers will be entered
const numArr = document.getElementById('numInput');
// Get the submit button element
const submitBtn = document.getElementById('submitBtn');

// Add an event listener to the submit button that listens for a 'click' event
submitBtn.addEventListener('click', function calculatesSum() {
    // Save the value of the input element
    const inputValue = numArr.value;
    
    // If the input is more than one digit
    if (inputValue.length <= 1) {
        alert("Enter more than one digit");
    }
    else {
        // then use reduce to calculate the sum of the digits
        const sum = inputValue
            .split("")// Split the string into an array of characters
            .reduce((sum, digit) => sum + parseInt(digit), 0); // Sum up the digits
        // Show the result in an alert
        alert(sum);
    }
});

//! Exercise 4
const randomBtn =document.getElementById("randomButton")

const displayInput= document.getElementById("displayedInput")
randomBtn.addEventListener('click',function randomNumGen(){
    const randomNum=Math.floor(Math.random() * 10)
    return displayInput.innerHTML=randomNum

})

//! Exercise 5
const redBtn = document.getElementById("redBtn")
const red= document.getElementById("red")

redBtn.addEventListener('mouseover',function changeStyle(){
    red.style.cssText="height: 100px; width: 100px; background-color: red;"
})
redBtn.addEventListener('mouseout',function changeStyle(){
    red.style.cssText=""
})

const blueBtn = document.getElementById("blueBtn")
const blue= document.getElementById("blue")

blueBtn.addEventListener('mouseover',function changeStyle(){
    blue.style.cssText="height: 100px; width: 100px; background-color: blue;"
})
blueBtn.addEventListener('mouseout',function changeStyle(){
    blue.style.cssText=""
})

const yellowBtn = document.getElementById("yellowBtn")
const yellow= document.getElementById("yellow")

yellowBtn.addEventListener('mouseover',function changeStyle(){
    yellow.style.cssText="height: 100px; width: 100px; background-color: yellow;"
})
yellowBtn.addEventListener('mouseout',function changeStyle(){
    yellow.style.cssText=""
})
