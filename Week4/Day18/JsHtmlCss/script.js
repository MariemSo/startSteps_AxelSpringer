const incrementBtn = document.getElementById("incrementBtn");
const counter = document.getElementById("counter");

let count=0;
counter.innerText = count;
function increment(){
    count+=1;
    counter.innerText=count;
}
incrementBtn.addEventListener('click',increment)