//! Task 5: Sets

    // 1. Create a set and add the numbers 1, 2, 3, 4, and 5 to it.
        const numbers = new Set([1,2,3,4,5])
    // 2. Add a duplicate number to the set and observe what happens.
        numbers.add(22)
        console.log(numbers)
    // 3. Remove a number from the set.
        numbers.delete(2)
    // 4. Print all the elements of the set.
        console.log(numbers)    