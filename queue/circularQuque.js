// Circular Queque is way to reuse the unused memory in the normal queque.

function CircularQuque() {
    this.front = -1;
    this.rear = -1;
    this.createCircularQueque = createCircularQueque;
    this.enqueq = enqueq;
    this.dequeq = dequeq;
    this.data = [];

    function createCircularQueque(size) {
        this.data = new Array(size);
    }

    function enqueq(element) {
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
            this.data[0] = element;
        } else {
            var index = (this.rear + 1) % this.data.length;
            if (index === this.front) {
                console.log('Queque is already full');
                return false;
            } else {
                this.data[index] = element;
                this.rear = index;
            }
        }
        return true;
    }

    function dequeq() {
        var index = (this.front + 1) % this.data.length;
        if (this.front == -1) {
            console.log('Queque is already empty');
            return false
        } else {
            this.data[this.front] = undefined;
            if (this.front == this.rear) {
                this.front = -1;
            } else {
                this.front = index;
            }
        }
        return true;
    }
}

var CQ = new CircularQuque();
CQ.createCircularQueque(5);
CQ.enqueq(1);
CQ.dequeq();
CQ.dequeq();
console.log(CQ.data);