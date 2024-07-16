let  days=["Monday","tuesday","Wednesday", "Thursday","Friday","Saturday","Sunday"]

//Loop Through the Array
for(var i=0; i<days.length;i++){
    console.log(days[i])
}
//Use i+=2
for (var i=0; i<days.length;i+=2){
    console.log(days[i]+" is at index "+i)
}

//Show Only Weekend
for (var i=5; i<days.length;i++){
    console.log("the weekend days are "+ days[i])
}

//Reverse Loop
for (var i=days.length-1; i>=0;i--){
    console.log(days[i]);
}

//Exclude Weekends
for (var i=days.length-3; i>=0;i--){
    console.log(days[i]);
}

