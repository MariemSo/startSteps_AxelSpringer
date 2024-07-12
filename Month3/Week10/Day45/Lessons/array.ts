//Declaration 
    // way 1
    let strArr : string[];
    let numArr: number[];

    // way 2
    let strArr2 : Array<string> ;
    let numArr2 : Array<number>;

//Initialization 
strArr = ["ahmed", "miou", "10"];


//Union
    // way1
    let strArrNum: (string|number|boolean)[] = ["ahmed", 10, true,"miou",false];
    
    // way2
    let strArrNum2: Array<string|number|boolean> = ["ahmed",10,true,false,"Miou"];
    
//
    const evenNumbers: number[]= new Array(4);

    for (let i = 0; i < evenNumbers.length; i++) {
        evenNumbers[i] = i * 2;
    }
    
    console.log(evenNumbers)

    const strNewArr : string[] = new Array ("ahmed","miou","regi");
    console.log(strNewArr)

//Arrays Two/Three-D
    // two D Arrays
    const twoD: string[][] = [
        ["head", "nose", "mouth"],
        ["Feet","toes","knee"],
        ["belly", "chest"],
    ]

    console.log(twoD[0][1]) //nose
    console.log(twoD[2][0]) //belly

    // 
    const threeD: number[][][] = [
        [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10]
        ],
        [
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
        ],
    ]
    console.log(threeD[0][1][3]) //9
    console.log(threeD[1][0]) //[ 11, 12, 13, 14, 15 ]
