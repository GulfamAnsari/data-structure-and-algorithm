function Queue() {
    function enqueue(ele) {
        this.dataStore.push(ele);
    }

    function dequeue() {
        this.dataStore.shift();
    }

    function front() {
        return this.dataStore[0];
    }

    function back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    function empty() {
        if (this.dataStore.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    function toString() {
        var retStr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    }

    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function radixSort(nums) {
    var que = new Queue();
    const max = (function () {
        var m = 0;
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] > m) {
                m = nums[i]
            }
        }
        return m;
    })();
    const digitCount = nums.toString().length;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i].toString.length === digitCount) {
            que.enqueue(nums[i] % 10);
        }
    }
}

console.log(radixSort([1, 423, 67, 34, 866]));