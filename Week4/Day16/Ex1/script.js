let inputQuestion = document.getElementById("inputQuestion");
let addBtn = document.getElementById("addBtn");
let questionsList = document.getElementById("questionsList"); 

function addQuestionToList(questionText) {
    const question = document.createElement('li');
    question.className = "question";
    const questionTextElement = document.createElement('li');
    questionTextElement.innerText = questionText;
    question.appendChild(questionTextElement); 
    questionsList.appendChild(question); 
}

addBtn.addEventListener("click", function() {
    if (inputQuestion.value !== "") {
        addQuestionToList(inputQuestion.value);
        inputQuestion.value = ""; 
    }
});
