function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
  
      // Shift elements of arr[0..i-1] that are greater than current
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }

  function quickSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Choose a pivot element from the array (e.g., the middle element)
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
  
    // Create sub-arrays for elements less than, equal to, and greater than the pivot
    let left = [];
    let middle = [];
    let right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else if (arr[i] === pivot) {
        middle.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    // Recursively sort the left and right sub-arrays and concatenate them with the middle array
    return quickSort(left).concat(middle).concat(quickSort(right));
  }

  const largeArray = Array.from({length:1000}, ()=> Math.floor(Math.random() * 1000));

function measureExecutionTime(algorithm,array){
    const arrayCopy = [...array]; //clone array to prevent in-place sorting
    const start = performance.now();
    algorithm(arrayCopy);
    const end = performance.now();
    return end - start;
}

const insertionTime = measureExecutionTime(insertionSort, largeArray);
const quickTime = measureExecutionTime(quickSort, largeArray);
console.log("Insertion Sort Time", insertionTime)
console.log("Quick Sort Time", quickTime)

// let otherArray = [...largeArray]
// insertionSort(largeArray)
// quickSort(otherArray)