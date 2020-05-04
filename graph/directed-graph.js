// Undirected graph implementation using adjancy list
function DirectedGraph() {
    this.edges = {};

    this.addVertex = function (vertex) {
        this.edges[vertex] = {};
    }

    this.addEdge = function (originVertex, destinationVertex, weight) {
        if (weight == undefined) {
            weight = 0;
        }
        this.edges[originVertex][destinationVertex] = weight;
        this.edges[originVertex][destinationVertex] = weight;
    }

    this.removeEdge = function (originVertex, destinationVertex) {
        if (this.edges[originVertex] && this.edges[originVertex][destinationVertex] != undefined) {
            delete this.edges[originVertex][destinationVertex];
        }
        if (this.edges[destinationVertex] && this.edges[destinationVertex][originVertex] != undefined) {
            delete this.edges[destinationVertex][originVertex];
        }
    }

    this.removeVertex = function (vertex) {
        for (var adjacentVertex in this.edges[vertex]) {
            this.removeEdge(adjacentVertex, vertex);
        }
        delete this.edges[vertex];
    }
}

var graph1 = new DirectedGraph();

graph1.addVertex(1);
graph1.addVertex(2);
graph1.addVertex(3);
graph1.addVertex(4);
graph1.addEdge(1, 2, 34);
graph1.addEdge(1, 3);
graph1.addEdge(2, 3, 35);
graph1.addEdge(2, 4, 67);
graph1.removeVertex(1);
graph1.removeEdge(2, 1);
console.log(graph1.edges)



