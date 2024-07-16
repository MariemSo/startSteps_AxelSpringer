class Car {
    //Field: Variables
    engine:string;

    //Constructor
    constructor (engine:string){
        this.engine = engine
    }
    
    //Function
    disp():void{
        console.log("Engine is : "+this.engine)
    } 
}

//Create an Object
var obj = new Car("XXSY1")




class Entity {
    //fields
    id:number;
    title:string;
    creationDate: Date;

    //Constructor 
    constructor (title:string){
        this.title = title
        this.id = Math.floor(Math.random()*1000)
        this.creationDate = new Date()
    }

    //Functions 
    getId(): number{
        return this.id
    }

    getTitle():string{
        return this.title
    }

    setTitle(title:string): void {
        this.title = title
    }

    getCreationDate():Date{
        return this.creationDate
    }
}

const entity1 = new Entity("Head")
console.log(entity1)
