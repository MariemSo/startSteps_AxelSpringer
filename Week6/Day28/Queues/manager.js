const queue=[];
const queueDisplay = document.getElementById("queue");

function enqueue(){
    const value = prompt("Enter value to enqueue");
    queue.push(value);
    updateDisplay();
}

function dequeue(){
    if(queue.length===0){
        alert("Queue is empty!");
        return;
    }
    const dequeueValue = queue.shift();
    alert("Dequeued value: "+ dequeueValue);
    updateDisplay();
}

function updateDisplay(){
    queueDisplay.textContent = queue.join(", ");
}