function MinHeap() {
    this.items = [];

    this.swap = function (index1, index2) {
        var temp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = temp;
    }

    this.parentIndex = function (index) {
        return Math.floor((index - 1) / 2);
    }

    this.leftChildIndex = function (index) {
        return index * 2 + 1;
    }

    this.rightChildrenIndex = function (index) {
        return index * 2 + 2;
    }

    this.parent = function (index) {
        return this.items[this.parentIndex(index)];
    }

    this.leftChild = function (index) {
        return this.items[this.leftChildIndex(index)];
    }

    this.rightChild = function (index) {
        return this.items[this.rightChildrenIndex(index)];
    }

    this.add = function (element) {
        this.items.push(element);
        if (this.items.length > 0) {
            var index = this.items.length - 1;
            while (index > 0) {
                var parentIndex = this.bubbleUp(index, element);
                index = parentIndex;
            }
        }
    }

    this.bubbleUp = function (index, element) {
        var parentIndex = this.parentIndex(index);
        var parent = this.parent(index);
        if (parent > element) {
            this.swap(index, parentIndex);
            return parentIndex;
        } else {
            return 0;
        }
    }

}

var minHeap = new MinHeap();
minHeap.add(25);
minHeap.add(15);
minHeap.add(10);
minHeap.add(1);
minHeap.add(2);
minHeap.add(3);
minHeap.add(4);
minHeap.add(20);

console.log(minHeap)
