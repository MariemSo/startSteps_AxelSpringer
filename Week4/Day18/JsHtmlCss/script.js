// ! Basic Counter
let incrementBtn = document.getElementById("incrementBtn");
let counter = document.getElementById("counter");

let count=0;
counter.innerText = count;
function increment(){
    count+=1;
    counter.innerText=count;
};
incrementBtn.addEventListener('click',increment);

//! Form Validation
let nameInput=document.getElementById("nameInput");
let nameError=document.getElementById("nameError")

let successMsg = document.getElementById("successMsg") ?? "your Form was successfully ";

let emailInput= document.getElementById("emailInput");

//store the from in a variable 
let submitForm=document.getElementById("submitForm");


//event listener for the submit event
submitForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(nameError,emailInput,nameInput)
    if(nameInput.value==""||emailInput.value==""){
        nameError.innerText="Please enter a valid Name or Email Address"
    }
    else{
        successMsg.innerText="your Form was successfully submitted"
        console.log(successMsg)
    }
})