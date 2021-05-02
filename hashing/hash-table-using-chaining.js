// Collision resolution by chaining combines linked representation with hash table. 
// When two or more records hash to the same location, 
// these records are constituted into a singly-linked list or an Array called a chain.


function HashTableUsingChaining() {
    this.put = put;
    this.get = get;
    this.store = [];
    this.hash = hash;


    function put(value) {
        var index = hash(value);
        if (!this.store[index]) {
            this.store[index] = [];
        }
        this.store[index].push(value);
    }

    function get(value) {
        var index = hash(value);
        if (this.store[index][0] == value) {
            return { rootIndex: index, childIndex: 0};
        } else {
            for (var i = 0; i < this.store[index].length; i++) {
                if (this.store[index][i] == value) {
                    return { rootIndex: index, childIndex: i};
                }
            }
        }
    }

    function hash(val) {
        var index = val % 7;
        return index;
    }
}

var ChaningHashTable = new HashTableUsingChaining();
ChaningHashTable.put(3);
ChaningHashTable.put(23);
ChaningHashTable.put(37);
ChaningHashTable.put(11);
ChaningHashTable.put(1);
ChaningHashTable.put(12);
ChaningHashTable.put(34);
ChaningHashTable.put(7);
console.log('Hash table for linear probing: ', ChaningHashTable.store);
console.log('Index of searched element is: ', ChaningHashTable.get(12));