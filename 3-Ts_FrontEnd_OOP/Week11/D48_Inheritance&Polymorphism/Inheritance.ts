class Printer {
    value: string;
    private _privateVal : number;
    protected _protectVal : number

    constructor (val:string){
        this.value = val
        this._privateVal = 0
        this._protectVal = 100
    }
    
    doPrint(){
        console.log("Do print from Parent")
    }
}

class ChildPrinter extends Printer{

    doSomething=()=>{
        console.log("something")
        console.log(this._protectVal) //unlike private ,protected members are accessible from child class 
    }

    // Overriding the doPrint method
    doPrint() {
        super.doPrint(); // calling the parent's method
        console.log("Do print from Child");
    }
}

const newChild = new ChildPrinter("abc")
newChild.doPrint()
newChild.doSomething()

// No access to a private value/method from parent class
// ---------------------------------------------
const newParent = new Printer("abc")
newParent.doPrint()
//! newParent.doSomething()
// No access to child method from parent class instance.
