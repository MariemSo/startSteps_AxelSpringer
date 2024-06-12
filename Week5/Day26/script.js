function createUser(name, id , numberOfProjects){
    let user= {}
    user.name=name;
    user.id=id;
    user.numberOfProjects=numberOfProjects;
    user.gerProjects= function(){};
    user.changeName= function(){};
    user.incrementNOP= function(){};
    user.decrementNOP= function(){};
}
const user1={
    id:1,
    username:"John_Doe",
    name:"John Doe",
    age:30,
    email:"j@s.com",
}
const user2={
    id:2,
    username:"Jane_Smith",
    name:"Jane Smith",
    age:25,
    email:"j@s.com",
}

const userList =[user1,user2]

function displayUserInfo(users){
    const personInfoElement=document.getElementById("person-info");
    personInfoElement.innerHTML="";

    users.forEach(user=>{
        const userInfoParagraph= document.createElement("p");
        userInfoParagraph.textContent= `Id:${user.id}- Name:${user.name},Age${user.age}`
        personInfoElement.appendChild(userInfoParagraph);
    })
}
displayUserInfo(userList)

function removeById(){
    const userInput= document.getElementById("userId");
    const userId =parseInt(userInput.value, 10);
    //check if the entered Id is valid Number 
    if(!isNaN(userId)){
        let indexToRemove = userList.findIndex(user=>user.id===userId);
        // let idToDelete = userList.find((user)=>user.id===id)
        if (indexToRemove!==-1){
            userList.splice(indexToRemove,1)
        
            //update Display
            displayUserInfo(userList);

            // clear input
            userInput.value="";
        }
        else{
            alert("user with this Id does not exist")
        }
    }
    else{
        alert("please enter a valid user ID")
    }
}

// First, we will assign an array userList where we will store our users.
let usersList=[]

// Second, we will create a function that will register our users.
function registerUser(){
    let userName= document.getElementById("userName").value
    let name= document.getElementById("name").value
    let age=parseInt(document.getElementById("age").value,10)
    let email= document.getElementById("email").value

    // The first check will be to validate the data we are receiving from the input.
    if(!userName||!name||isNaN(age)||!email){
        alert("Please fill in all fields with valid information ");
        return;
    }

    // The userId variable will be taking userList length(size) and adding one to it, setting our user IDs.
    const userId = usersList.length+1;
    
    //create user Object
    const newUser={
        id:userId,
        userName: userName,
        name:name,
        age:age,
        email:email,
    }
    //add new user to the user List
    usersList.push(newUser)

    //updates
    displayRegisteredUsers();
    clearRegisteredFrom();
}
function displayRegisteredUsers(){
    const registeredUsersList= document.getElementById("registeredUsers");

    registeredUsersList.innerHTML="";

    usersList.forEach(user=>{
        const userInfoParagraph= document.createElement("p");
        userInfoParagraph.textContent= `ID: ${user.id}, UserName:${user.userName}`
        registeredUsersList.appendChild(userInfoParagraph);
    })
}
function clearRegisteredFrom(){
    document.getElementById("userName").value=""
    document.getElementById("name").value=""
    document.getElementById("age").value=""
    document.getElementById("email").value=""

}