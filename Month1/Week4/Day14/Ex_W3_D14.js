//How would you check if number is even or odd with branching?

let number = 10
let message= number%2===0? console.log("number is Even"):console.log("number is Odd")

//How would you display default message if username is unavailable with logical OR?

let username;
let defaultUserName="Anonymous";
let messageDisplay= username||defaultUserName;
console.log("Hello",messageDisplay)

//How would you set default guest value for username if the entered username is unavailable with ??

let user_name="Miou";
let default_UserName="Anonymous";
let message_Display= user_name||default_UserName;
console.log("Hello",message_Display)



