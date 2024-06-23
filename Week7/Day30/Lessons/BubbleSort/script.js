const originalArray =[64,34,25,12,22,11,90];
const originalArrayDisplay =document.getElementById("original-array")
const sortedArrayDisplay =document.getElementById("sorted-array")

originalArrayDisplay.textContent=originalArray.join(",")

function bubbleSort(array){
    let swapped;
    do{
        swapped=false;
        for (let i =0;i<array.length-1;i++){
            if(array[i]>array[i+1]){
                [array[i],array[i+1]]=[array[i+1],array[i]];
                swapped=true;
            }
        }
    }while (swapped);
    return array;
}
function bubbleSort2(array){
    for (let i = 0; i < array.length; i++) {
        let swapped = false;
        for (let j=0; j<array.length-i-1;j++){
            if (array[j]>array[j+1]){
                const temp = array[j]
                array[j]=array[j+1]
                array[j+1]= temp;
                swapped=true;
            }
        }     
        if(!swapped){
            console.log(swapped)
            break;
        }   
    }
    return array
}
function sort(){
    const sortedArray = bubbleSort(originalArray.slice())
    sortedArrayDisplay.textContent = sortedArray.join(", ")
}