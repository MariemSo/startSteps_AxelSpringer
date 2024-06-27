let graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'E'],
    D: ['B'],
    E: ['C']
};

function graphBfs(graph, startingNode){
    
    //initialising the queue and adding the starting Node
    let queue =[startingNode];

    // track visited nodes not to revisit 
    let visited = new Set([startingNode]);
    
    // track the traversed path
    let result = [];


    while (queue.length > 0){  
        //dequeuing node
        let currentNode = queue.shift()

        // add node to result
        result.push(currentNode)

        for (let neighbor of graph[currentNode]){
            if (!visited.has(neighbor)){
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }
    return result;

}
console.log(graphBfs(graph, "A"))
