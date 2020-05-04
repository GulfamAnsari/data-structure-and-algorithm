// Undirected graph implementation using adjancy list
function UndirectedGraph() {
    this.edges = {};

    this.addVertex = function (vertex) {
        this.edges[vertex] = {};
    }

    this.addEdge = function (vertex1, vertex2, weight) {
        if (weight == undefined) {
            weight = 0;
        }
        this.edges[vertex1][vertex2] = weight;
        this.edges[vertex2][vertex1] = weight;

    }

    this.removeEdge = function (vertex1, vertex2) {
        if (this.edges[vertex1] && this.edges[vertex1][vertex2] != undefined) {
            delete this.edges[vertex1][vertex2];
        }
        if (this.edges[vertex2] && this.edges[vertex2][vertex1] != undefined) {
            delete this.edges[vertex2][vertex1];
        }
    }

    this.removeVertex = function (vertex) {
        for (var adjacentVertex in this.edges[vertex]) {
            this.removeEdge(adjacentVertex, vertex);
        }
        delete this.edges[vertex];
    }

    this.bfs = function (vertex) {
        var quequ = [];
        var visited = {};

        quequ.push(vertex);
        while (quequ.length) {
            var ele = quequ.shift();
            var node = this.edges[ele];
            visited[ele] = true;
            console.log(ele);
            for (var v of Object.keys(node)) {
                if (!visited[v] && !quequ.includes(v)) {
                    quequ.push(v);
                }
            }
        }
    }

    this.dfs = function(vertex) {
        var visited = {};
        traverse.call(this, vertex, visited);
        function traverse(vertex, visited) {
            console.log(vertex);
            visited[vertex] = true;
            for (var adjacentVertex in this.edges[vertex])  {
                if (!visited[adjacentVertex]) {
                    traverse.call(this, adjacentVertex, visited);
                }
            }
        }
    }
}

// Undirected graph implementation using adjancy Matrix
function UndirectedGraphAdjancyMatrix(n) {
    this.matrix = [];
    for (var i = 0; i < n; i++) {
        this.matrix[i] = [];
        for (var j = 0; j < n; j++) {
            this.matrix[i][j] = null;
        }
    }

    this.addEdge = function (vertex1, vertex2) {
        var weight = 1;
        this.matrix[vertex1][vertex2] = weight;
        this.matrix[vertex2][vertex1] = weight;
    }
}

var graph2 = new UndirectedGraphAdjancyMatrix(3);
graph2.addEdge(1, 2);
graph2.addEdge(0, 2);
graph2.addEdge(0, 2);


var graph1 = new UndirectedGraph();
graph1.addVertex(1);
graph1.addVertex(2);
graph1.addVertex(3);
graph1.addVertex(4);
graph1.addVertex(5);
graph1.addVertex(6);
graph1.addEdge(1, 2);
graph1.addEdge(2, 3);
graph1.addEdge(3, 4);
graph1.addEdge(4, 5);
graph1.addEdge(5, 1);
graph1.addEdge(6, 3);
graph1.addEdge(6, 1);
graph1.removeVertex(6);
graph1.removeEdge(6, 1);
console.log('BFS Traversal');
graph1.bfs(1);
console.log('\n');
console.log('DFS Traversal');
graph1.dfs(1);
console.log('\n');
console.log(graph1);



