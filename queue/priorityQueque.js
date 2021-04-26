function PriorityQuequ() {
    this.enqueue = enqueue;
    this.dequeqe = dequeqe;
    this.data = [];
    this.front = front;
    this.rear = -1;
    this.rearElement = rearElement;

    function enqueue(element) {
        this.data.push(element);
        this.rear++;
    }

    function dequeqe() {
        if (this.rear === -1) {
            return;
        }
        var highPriority = this.front().pri;
        var priIndex = 0;
        for (var i in this.data) {
            if (highPriority < this.data[i].pri) {
                priIndex = i;
            }
        }
        this.data.splice(priIndex, 1);
        this.rear--;
    }

    function front() {
        return this.data[0];
    }

    function rearElement() {
        return this.data[this.rear];
    }
}

var PQ = new PriorityQuequ();
PQ.enqueue({ val: 2, pri: 3 });
PQ.enqueue({ val: 2, pri: 4 });
PQ.enqueue({ val: 2, pri: 1 });
PQ.enqueue({ val: 2, pri: 5 });
PQ.dequeqe();
PQ.dequeqe();
console.log(PQ.data);