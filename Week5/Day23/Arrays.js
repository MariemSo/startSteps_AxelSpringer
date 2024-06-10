//! Task 1: Arrays

// 1. Create a single-dimensional array containing the numbers 1 to 5.
    let singleArr =[1,2,3,4,5]
    // b.. Create a two-dimensional array (matrix) representing the following data:
        // 1 2 3
        // 4 5 6
        // 7 8 9
        let twoDArr=[
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]

// 2. Add the number 6 to the end of the single-dimensional array.
        singleArr.push(6)//did we create another array ?
        console.log(singleArr)

// 3. Access and print the element at the second row and third column of the matrix.
        console.log(twoDArr[1][2]) //arr[row][column]