class Circle {
    private _radius =0;

    get radius():number{
        return this._radius;
    }

    set radius(val: number){
        if(val > 0){
            this._radius = val
        }else{
            console.log("the value should be more than 0")
        }
    }
}