let FranHobbies=["Skating","Reading","WaterColor","Cats","SkinCare"]
let MiouHobbies=["WaterColor","VideoGames","Cooking","Tinkering"]

let commonInterest=[]

for (let i=0;i<FranHobbies.length;i++){
    for(let j=0;j<MiouHobbies.length;j++){
        if(FranHobbies[i]===MiouHobbies[j]){
            commonInterest.push(FranHobbies[i]);
        }
    }
}
console.log(`Here are some common interest ${commonInterest[i]}`)