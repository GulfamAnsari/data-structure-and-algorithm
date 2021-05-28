function MaxHeap() {
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
        if (parent < element) {
            this.swap(index, parentIndex);
            return parentIndex;
        } else {
            return 0;
        }
    }

    this.delete = function() {
        var rootElement = this.items[0];
        this.items[0] = this.items[this.items.length-1];
        var root = this.items.pop();
        var index = 0;
        var parent = this.items[0];
        while (index >= 0) {
            var parentIndex = this.bubbleDown(index, parent);
            index = parentIndex;
            parent = this.items[index];
        }
        return rootElement;
        
    }

    this.bubbleDown = function(index, parent) {
        var parentIndex = index;
        var leftChildIndex = this.leftChildIndex(index);
        var rightChildrenIndex = this.rightChildrenIndex(index);
        var leftChild = this.leftChild(index);
        var rightChild = this.rightChild(index);
        if (leftChild > parent || rightChild > parent) {
            if (leftChild > parent && rightChild > parent) {
                if (leftChild > rightChild) {
                    this.swap(leftChildIndex, parentIndex);
                    return leftChildIndex;    
                } else {
                    this.swap(rightChildrenIndex, parentIndex);
                    return rightChildrenIndex;    
                }
            } else if (leftChild > parent) {
                this.swap(leftChildIndex, parentIndex);
                return leftChildIndex;
            } else {
                this.swap(rightChildrenIndex, parentIndex);
                return rightChildrenIndex;
            }
        } else {
            return -1;
        }
    }

    this.heapSort = function() {
        var sortedArray = [];
        while(this.items.length > 0) {
            var deletedElement = this.delete();
            sortedArray.push(deletedElement);
        }
        return sortedArray;
    }
}

var maxHeap = new MaxHeap();
maxHeap.add(25);
maxHeap.add(15);
maxHeap.add(10);
maxHeap.add(1);
maxHeap.add(2);
maxHeap.add(3);
maxHeap.add(4);
maxHeap.add(20);
maxHeap.add(21);
maxHeap.add(26);
maxHeap.add(1);
// maxHeap.delete();
console.log(maxHeap.heapSort());

console.log(maxHeap);
