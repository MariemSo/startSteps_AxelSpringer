const originalArray =[64,34,25,12,22,11,90];
const originalArrayDisplay =document.getElementById("original-array")
const sortedArrayDisplay =document.getElementById("sorted-array")
const iterationsDisplay = document.getElementById("iterations")
originalArrayDisplay.textContent=originalArray.join(",")

function selectionSort(array){
    let iterations =0;        
    for (let i = 0; i < array.length-1; i++) {
        let minIndex=i;        
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[minIndex]){

                minIndex=j;
            }
        }
        [array[i],array[minIndex]]=[array[minIndex],array[i]]
        iterations++;
    }
    return {sortedArray: array, iterations:iterations};
}
function sort(){
    const {sortedArray,iterations} = selectionSort(originalArray.slice())
    sortedArrayDisplay.textContent = sortedArray.join(", ")
    iterationsDisplay.textContent=iterations;
}