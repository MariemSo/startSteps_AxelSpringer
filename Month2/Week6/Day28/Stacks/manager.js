const stack =[];
const stackDisplay = document.getElementById("stack");

function push(){
    const value = prompt("Enter value to push")
    stack.push(value);
    updateDisplay();
}

function pop(){
    if (stack.length===0){
        alert("Slack is Empty!");
        return;
    }
    const poppedValue = stack.pop();
    alert ("Popped value :" + poppedValue);
    updateDisplay();
}

function updateDisplay(){
    stackDisplay.textContent= stack.join(", ")
}