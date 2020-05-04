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

    this.dijkstra = function (source) {
        var dist = {}; // Distance Object
        var Q = {}; // Graph object

        for (var v in this.edges) {
            dist[v] = Infinity;
            Q[v] = this.edges[v];
        }
        dist[source] = 0;

        while (Object.keys(Q).length > 0) {
            var u = _extractMin(Q, dist);
            delete Q[u];

            for (var neighbor in this.edges[u]) {
                // current distance
                var alt = dist[u] + this.edges[u][neighbor];
                // a shorter path has been found
                if (alt < dist[neighbor]) {
                    dist[neighbor] = alt;
                }
            }
        }

        return dist;
        function _extractMin(Q, dist) {
            var minimumDistance = Infinity
            var nodeWithMinimumDistance = null;
            for (var node in Q) {
                if (dist[node] <= minimumDistance) {
                    minimumDistance = dist[node];
                    nodeWithMinimumDistance = node;
                }
            }
            return nodeWithMinimumDistance;
        }
    }
}


var graph = new DirectedGraph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addEdge(1, 2, 2);
graph.addEdge(1, 3, 4);
graph.addEdge(2, 4, 7);
graph.addEdge(2, 3, 1);
graph.addEdge(4, 6, 1);
graph.addEdge(3, 5, 3);
graph.addEdge(5, 6, 5);
graph.addEdge(5, 4, 2);
var Dijkstra = graph.dijkstra(1);
console.log(graph)
console.log(Dijkstra);
