const nameInput = document.getElementById('nameInput')
const submitName = document.getElementById('submitName')

submitName.addEventListener('click', function(){
    const name = nameInput.value;
    alert(`Hi, ${name}`)
})

const correctNumber = Math.floor(Math.random() * 10) + 0;
buttonElement.addEventListener('click', function () {
    while (true) {
        // Get the user input and parse it as an integer
        const inputValue = parseInt(inputElement.value);
        // Check if the input is a valid number
        if (!isNaN(inputValue)) {
            if (inputValue === correctNumber) {
                alert("Congratulations! You guessed the correct number.");
                break; // Exit the loop if the guess is correct
            } else if (inputValue < correctNumber) {
                alert("Sorry, try again. Please guess a bigger number.");
            } else {
                alert("Sorry, try again. Please guess a smaller number.");
            }
        } else {
            alert("Please enter a valid number.");
        }
        break;
    }
});
