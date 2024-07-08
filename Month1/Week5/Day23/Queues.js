//! Task 3: Queues
    // 1. Create an empty array to represent the queue.
        let queue1=[]
    // 2. Implement functions to enqueue (add) elements to the end of the queue and dequeue (remove) elements from the front of the queue.
        function enqueue(queue,num){
            queue.unshift(num)
            return queue
        }
    // 3. Enqueue the elements 'a', 'b', and 'c' to the queue.
    enqueue(queue1,"a")
    enqueue(queue1,"b")
    enqueue(queue1,"c")
    console.log(queue1)
    // 4. Dequeue an element from the queue and print it.
        function dequeue(queue){
            queue.pop()
            return queue
        }
        console.log(dequeue(queue1))