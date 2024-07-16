function sum(a:number, b:number):number{
    return a+b;
}

const multiply = (a: number, b:number):number =>{
    return a*b;
}

const bol = false;

const temp = () : number|void =>{
    if (bol){
        return 10;
    }
    return undefined;
}

const displayInfo = (name : string, lastName: string, age?:number):void =>{
    console.log(name);
    console.log(lastName);
    if (age) {
        console.log(age);
    }
}

displayInfo("ahmad","mm",30)

