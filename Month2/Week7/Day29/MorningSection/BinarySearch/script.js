const number = [2,3,5,7,12,15,16,17,23,27,35,67,72];
const resultDisplay = document.getElementById("result");

function binarySearch(numbers, target)
{
    let left =0;
    let right=numbers.length -1 ;
    while (left<= right){
        //index of current middle
        const middleIndex =Math.floor((left+right)/2);
        const middleNumber= numbers[middleIndex];
        if (middleNumber===target){
            return middleIndex //index of found value
        }
        else if (middleNumber<target){
            left = middleIndex +1;
        }
        else {
            right = middleIndex -1;
        }
    }
    return -1
}

function search(){
    const searchNumber=parseInt(document.getElementById("searchNumber").value);
    const index= binarySearch(number,searchNumber);

    if (index!==-1){
        resultDisplay.textContent=`Number ${searchNumber} found at index ${index}`;
    }
    else{
        resultDisplay.textContent=`Number ${searchNumber} was not found`;

    }
}
