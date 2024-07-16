let empId:number = 1;
let empName: string ="steve";

//Tuple Type Variable

let oneEmployee : [number, string] = [empId,empName];
console.log(oneEmployee[0]);
console.log(oneEmployee[1]);

let person3:[number, string, boolean] = [2,"ahmad",true];

let user: [number, string,boolean,number, string];
user = [empId,empName,true,20,"Admin"]

let employees : [number,string][];
employees = [[1,"steve"],[2,"ahmad"],[3,"Regi"]];