const graph ={
    A:["B", "C"],
    B:["D", "E"],
    C:["F"],
    D:[],
    F:[],
    E:[]
}

function bfs (graph, startNode, outputElement){
    const visited = {};
    const queue = [];

    queue.push(startNode);
    visited[startNode] = true;
    console.log(visited)
    while (queue.length > 0){
        const currentNode= queue.shift();
        console.log(currentNode);
        outputElement.textContent += currentNode + " ";
        for (const neighbor of graph[currentNode]){
            if (!visited[neighbor]){
                queue.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
}
function dfs (graph, startNode, outputElement){
    const visited = {};
    const stack = [];

    stack.push(startNode);
    visited[startNode] = true;

    while (stack.length > 0){
        const currentNode= stack.pop();
        console.log(currentNode);
        outputElement.textContent += currentNode + " ";
        for (let i=graph[currentNode].length-1;i>=0;i--){
            const neighbor =graph[currentNode][i]
            if (!visited[neighbor]){
                stack.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
}
function startGraphs(){
    const outputElementBfs = document.getElementById("outputBfs")
    const outputElementDfs = document.getElementById("outputDfs")
    outputElementBfs.textContent = ""
    outputElementDfs.textContent = ""
    bfs(graph,"A",outputElementBfs)
    dfs(graph,"A",outputElementDfs)
}