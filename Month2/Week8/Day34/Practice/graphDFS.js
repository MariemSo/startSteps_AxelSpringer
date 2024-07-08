let graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'E'],
    D: ['B'],
    E: ['C']
};

function graphBfs(graph, startingNode){
    
    let stack =[startingNode];

    let visited = new Set([startingNode]);
    
    let result = [];


    while (stack.length > 0){  
        let currentNode = stack.pop()

        result.push(currentNode)

        for (let neighbor of graph[currentNode]){
            if (!visited.has(neighbor)){
                visited.add(neighbor)
                stack.push(neighbor)
            }
        }
    }
    return result;

}
console.log(graphBfs(graph, "A"))
