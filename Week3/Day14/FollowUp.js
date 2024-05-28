//Function

function functionName (p){
    return p;
}

//Arrow Function

const functionName= (p => p)
//                     |
//              replace return                    

//Class 
class className{
    
    //initialize the class blueprint
    constructor(p1,p2){
        this.p1     =       p1
    //       |              |                        
    //    proprety         parameter
        this.p2= p2
    }

    //method(class function)
    fucntionName(){
        //block of code
    }

}

//add an object
const varName = new className(p1,p2)

//use a function on a object
varName.fucntionName()