// var x = 1;
// var y = 2;
// var z = 3;
// //! y+=x*= z;

// y = y+ x = 2 + 1 
// y+= x = 3
// console.log ("y+=x is equal",y+=x) 
// Output => 3
// y*=z
// console.log("y*=z is equal", y*=z) 
// Output => 9
// console.log(y+=x*=z) 
//output => 5 
// y=y+x = y*z y 
// 2+1 =3 *3 = 9
//

// console.log(y*=z+=x) //output => 8

// Block scoped
{
    let x = 1;
    let y = 2;
    let z = 3;
    console.log(x + y + z)
}

{
    let x = 1;
    let y = 2;
    // let i : number;
    // let i = 6
    console.log(x + y + z)
    // sum(x, y)
}

// function sum(a, b) {
//     let a;
// }