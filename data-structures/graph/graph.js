class Graph {
    constructor() {  this.adjList = {} }

    addVertex(vertex)
    {
        if(!this.adjList[vertex]) 
        { this.adjList[vertex] = new Set() } 
        else { return null }
    }

    addEdge(v1, v2)
    {
        if(!this.adjList[v1]) { this.addVertex(v1) }
        if(!this.adjList[v2]) { this.addVertex(v2) }
        this.adjList[v1].add(v2)
        this.adjList[v2].add(v1)
    }

    hasEdge(v1, v2)
    {
            return this.adjList[v1].has(v2) && this.adjList[v2].has(v1)
    }


    removeEdge(v1, v2)
    {
      this.adjList[v1].delete(v2)
      this.adjList[v2].delete(v1)
    }

    removeVertex(vertex)
    {
        if(!this.adj[vertex]) { return null}
        for (const edges of this.adjList[vertex])
        { this.removeEdge(vertex, edges) }
        delete this.adjList[vertex]
    }

    print()
    {
        for (const vertex in this.adjList)
        {
            console.log(`${vertex} --> ${[...this.adjList[vertex]].join(' ')}`)
        }
    }
}

/* const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')

graph.print()

console.log(graph.hasEdge('A', 'B')) */
