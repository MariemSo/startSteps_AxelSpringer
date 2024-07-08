function bubbleSort(arr){
    let swapped ;
    do {
        swapped = false;
        for ( let i = 0; i < arr.length-1; i++){
            if (arr[i]>arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                swapped=true;
            }
        }
    }while (swapped);
    return arr;
}

function mergeSort(arr){
    if ( arr.length <= 1){
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort ( arr.slice(0, mid));
    const right = mergeSort (arr.slice(mid));

    return merge(left, right);
}

function merge ( left , right){
    const result = [];
    let i = 0 , j=0;
    
    while ( i < left.length && j < right.length){
        if(left[i]<= right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

const largeArray = Array.from({length:1000}, ()=> Math.floor(Math.random() * 1000));

function measureExecutionTime(algorithm,array){
    const arrayCopy = [...array]; //clone array to prevent in-place sorting
    const start = performance.now();
    algorithm(arrayCopy);
    const end = performance.now();
    return end - start;
}

const bubbleTime = measureExecutionTime(bubbleSort, largeArray);
const mergeTime = measureExecutionTime(mergeSort, largeArray);
console.log("Bubble Sort Time", bubbleTime)
console.log("Merge Sort Time", mergeTime)

// let otherArray = [...largeArray]
// mergeSort(largeArray)
// bubbleSort(otherArray)