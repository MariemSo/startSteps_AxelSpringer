const unsortedTechBatch = [
    "Keyboard",
    "Monitor",
    "Adjuster",
    "Printer",
    "Mouse",
    "Fridge",
    "Headphones"
  ];

  function bubbleSortTech(arr) {
    const len = arr.length;

    for (let i=0; i <len - 1; i++){
        for (let j=0; j < len - 1; j++ ){
            if (arr[j]> arr[j+1]){
                [arr[j],arr[j + 1]]=[ arr[j+1],arr[j]]
            }
        }
    }
    return arr
  }

  console.log(bubbleSortTech(unsortedTechBatch))