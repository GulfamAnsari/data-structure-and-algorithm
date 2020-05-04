
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

    this.prism = function () {
        var visited = {};
        var edges = JSON.parse(JSON.stringify(this.edges));

        var graph = new UndirectedGraph();
        if (Object.keys(edges).length > 1) {
            // Initial for make the first edge.
            var edge = getMinimumEdge(edges);
            graph.addVertex(edge.v1);
            graph.addVertex(edge.v2);
            graph.addEdge(edge.v1, edge.v2, edge.w);
            visited[edge.v1] = true;
            visited[edge.v2] = true;
            removeEdge(edge.v1, edge.v2, edges);

            var v1 = edge.v1;
            var v2 = edge.v2;
            while (Object.keys(visited).length != Object.keys(this.edges).length) {
                var e = getAdjacentMinimumVertex(v1, v2, edges);
                visited[e.v] = true;
                graph.addVertex(e.v1);
                graph.addVertex(e.v);
                graph.addEdge(e.v1, e.v, e.w);
                removeEdge(e.v1, e.v, edges);
                v1 = e.v;
                v2 = null;
            }
        }

        return graph;


        function getAdjacentMinimumVertex(vertex1, vertex2, edges) {
            var edge = {
                w: Infinity,
            }
            for (e in edges[vertex1]) {
                if (edges[vertex1][e] < edge.w) {
                    edge.w = edges[vertex1][e]
                    edge.v = e;
                    edge.v1 = vertex1;
                }
            }
            for (e in edges[vertex2]) {
                if (edges[vertex2][e] < edge.w) {
                    edge.w = edges[vertex2][e]
                    edge.v = e;
                    edge.v1 = vertex2;
                }
            }
            return edge
        }

        function getMinimumEdge(edges) {
            var edge = {
                w: Infinity,
            }
            for (var key in edges) {
                for (var k in edges[key]) {
                    if (edges[key][k] < edge.w) {
                        edge.w = edges[key][k];
                        edge['v1'] = key;
                        edge['v2'] = k;
                    }
                }
            }
            return edge;
        }
        function removeEdge(vertex1, vertex2, edges) {
            if (edges[vertex1] && edges[vertex1][vertex2] != undefined) {
                delete edges[vertex1][vertex2];
            }
            if (edges[vertex2] && edges[vertex2][vertex1] != undefined) {
                delete edges[vertex2][vertex1];
            }
        }
    }
}


var graph = new UndirectedGraph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);
graph.addEdge(1, 2, 25);
graph.addEdge(1, 6, 5);
graph.addEdge(2, 3, 9);
graph.addEdge(2, 1, 25);
graph.addEdge(3, 4, 10);
graph.addEdge(3, 2, 9);
graph.addEdge(4, 5, 12);
graph.addEdge(4, 3, 10);
graph.addEdge(4, 7, 11);
graph.addEdge(5, 6, 18);
graph.addEdge(5, 4, 12);
graph.addEdge(5, 7, 16);
graph.addEdge(6, 5, 18);
graph.addEdge(6, 1, 5);
graph.addEdge(7, 2, 6);
graph.addEdge(7, 5, 16);
graph.addEdge(7, 4, 11);

console.log('Graph is: \n', graph.edges);
console.log('\n');
console.log('Minimum spanning tree using prism algorithms \n', graph.prism().edges);