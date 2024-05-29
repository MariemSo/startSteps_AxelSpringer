
const numArr = document.getElementById('numInput')
const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click',

    function calculatesSum() {
    //need to make sure the input is num
    const inputValue=numArr.value
    if(inputValue!=NaN){
        alert("Enter numbers only")
    }
    //make sure its more than 1 digit
    else if(inputValue.length<=1){
        alert("Enter more than one digit")
    }
    //calculate
    else{
            return alert(inputValue.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0));
        }
        
    }
)
