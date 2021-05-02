//****************************************************************************************/
//***************** In open addressing all keys are stored in the hash table itself. *****************
//***************** This approach is also known as closed hashing. This procedure is based on probing.*************
//***************** A collision is resolved by probing. ***********************************************************
//********************************************************************** */

// Make Hash table with the help of linear probing to reduce the collision
function HashTableLinearProbing() {
    this.store = [];
    this.put = put;
    this.get = get;

    function put(value) {
        var index = hash(value);
        if (!this.store[index]) {
            this.store[index] = value;
        } else {
            for (var i = index; i < this.store.length; i++) {
                if (!this.store[i]) {
                    this.store[i] = value;
                    return;
                }
            }
            this.store[this.store.length] = value;
        }
    }

    function get(value) {
        var index = hash(value);
        if (this.store[index] == value) {
            return index;
        } else {
            for (var i = index; i < this.store.length; i++) {
                if (this.store[i] == value) {
                    return i;
                }
            }
            return this.store.length;
        }
    }

    function hash(val) {
        var index = val % 13;
        return index;
    }
}

var linearProbing = new HashTableLinearProbing();
linearProbing.put(3);
linearProbing.put(23);
linearProbing.put(37);
linearProbing.put(11);
linearProbing.put(1);
linearProbing.put(12);
linearProbing.put(34);
linearProbing.put(7);
console.log('Hash table for linear probing: ', linearProbing.store);
console.log('Index of searched element is: ', linearProbing.get(12));


// Make Hash table with the help of linear probing to reduce the collision
function HashTableQuadraticProbing() {
    this.store = [];
    this.put = put;
    this.get = get;

    function put(value) {
        var index = hash(value);
        if (!this.store[index]) {
            this.store[index] = value;
        } else {
            for (var i = index; i < this.store.length; i = Math.pow(i, 2)) {
                if (!this.store[i]) {
                    this.store[i] = value;
                    return;
                }
            }
            this.store[this.store.length] = value;
        }
    }

    function get(value) {
        var index = hash(value);
        if (this.store[index] == value) {
            return index;
        } else {
            for (var i = index; i < this.store.length; i = Math.pow(i, 2)) {
                if (this.store[i] == value) {
                    return i;
                }
            }
            return this.store.length;
        }
    }

    function hash(val) {
        var index = val % 7;
        return index;
    }
}


// Make Hash table with the help of linear probing to reduce the collision
function DoubleHashWithLinearProbing() {
    this.store = [];
    this.put = put;
    this.get = get;

    function put(value) {
        var index = hash(value);
        if (!this.store[index]) {
            this.store[index] = value;
        } else {
            for (var i = index; i < this.store.length; i++) {
                if (!this.store[i]) {
                    this.store[i] = value;
                    return;
                }
            }
            this.store[this.store.length] = value;
        }
    }

    function get(value) {
        var index = hash(value);
        if (this.store[index] == value) {
            return index;
        } else {
            for (var i = index; i < this.store.length; i++) {
                if (this.store[i] == value) {
                    return i;
                }
            }
            return this.store.length;
        }
    }

    function hash(val) {
        var index = val % 13;
        return secondHash(index);
    }

    function secondHash(hashedKey) {
        var R = this.store.length - 2;
        return R - hashedKey % R;
    }
}

var linearProbing = new HashTableQuadraticProbing();
linearProbing.put(3);
linearProbing.put(7);
linearProbing.put(23);
linearProbing.put(37);
linearProbing.put(11);
linearProbing.put(1);
linearProbing.put(12);
linearProbing.put(34);
console.log('Hash table for linear probing: ', linearProbing.store);
console.log('Index of searched element is: ', linearProbing.get(7));
