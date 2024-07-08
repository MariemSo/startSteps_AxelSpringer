const originalArray = [64,34,25,12,22,11,90];
const originalArrayDisplay = document.getElementById("original-array")
const sortedArrayDisplay = document.getElementById("sorted-array")
const iterationsDisplay = document.getElementById("iterations")

originalArrayDisplay.textContent=originalArray.join(",")

function insertionSort(array){
    let iteration = 0;
    for (let i = 0; i < array.length; i++) {
        let key = array[i];    
        let j = i-1;    
        while (j >= 0 && array[j]>key) {
            array[j+1 ]= array[j];
            j--;
            iteration++;    
        }
        array[j+1] = key;
    }
    return {sortedArray:array, iteration:iteration};
}
function sort(){
    const {sortedArray,iteration} = insertionSort(originalArray.slice())
    sortedArrayDisplay.textContent = sortedArray.join(", ")
    iterationsDisplay.textContent = iteration;
}