//! Task 2: Stacks
    // Instructions:
    // 1. Create an empty array to represent the stack.
        let stack=[]
    // 2. Implement functions to push elements onto the stack and pop elements from the
    // stack.
        function popStack(){
            stack.pop()
            console.log(stack)
        }
        function pushStack(num){
            stack.push(num)
            console.log(stack)
        }
    // 3. Push the elements 10, 20, and 30 onto the stack.
        pushStack(10)
        pushStack(20)
        pushStack(30)
    // 4. Pop an element from the stack and print it.
        popStack()