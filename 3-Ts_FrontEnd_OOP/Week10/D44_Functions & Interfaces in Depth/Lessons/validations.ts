interface IRegForm {
    name: string;
    email: string;
    password:string;
    age?: number;
}

const validationForm = (data: IRegForm):string[] =>{
    const erros: string[]=[];
    const {name, email, password,age} =data;

    if(name.length === 0){
        erros.push("The name should not be empty")
    }
    if(!email.includes("@")){
        erros.push("Email Must have @ in it")
    }
    if(password.length < 8){
        erros.push("Password should be 8 characthers or longer")
    }
    if(age !== undefined&&(age <=0 || age > 150)){
        erros.push("age is not valid");
    }
    return erros
}
const person: IRegForm = {
    name: "Miou",
    email: "m@m.com",
    password:"ash",
    age:0
}

const erros = validationForm(person)

if (erros.length > 0) {
    erros.forEach(error => console.log(error))
}