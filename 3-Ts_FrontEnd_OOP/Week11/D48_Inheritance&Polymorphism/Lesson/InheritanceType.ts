class Shape{
    protected color: string;
    
    constructor (color: string){
        this.color = color;
    }

    draw(){
        console.log(`Drawing a ${this.color} shape...`)
    }
}

class Circle extends Shape{
    private radius: number;
    
    constructor (color: string,radius:number){
        super(color) ; //constractuor from parent class(shape)
        this.radius = radius;
    }

    calculateArea():number{
        return Math.PI* (this.radius^2)
    }
}

class Rectangle extends Shape {
    protected height: number;
    protected width: number;

    constructor(color:string, height:number, width:number){
        super(color);
        this.height = height;
        this.width = width
    }

    calculateArea():number{
        return this.width * this.height
    }
}

class Square extends Rectangle{
    constructor(color:string, width:number){
        super(color,width,width)
    } 
}

export{}