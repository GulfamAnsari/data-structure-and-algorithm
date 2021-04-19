function Stack() {

    function push(ele) {
        this.dataStore.push(ele);
        this.top++;
    }

    function pop() {
        return this.dataStore[--this.top];
    }

    function peek() {
        return this.dataStore[this.top - 1];
    }

    function length() {
        return this.top;
    }

    function clear() {
        this.top = 0;
    }
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

function checkPalandrom(pal) {
    var stack = new Stack();
    var isPal = true;
    for (let i = 0; i < pal.length; i++) {
        stack.push(pal[i]);
        stack.push(pal[pal.length - 1 - i])
        if (stack.pop() != stack.pop()) {
            isPal = false
        }
    }

    if (isPal) {
        console.log('palandrom');
    } else {
        console.log('not');
    }
}

function calculateFactorial(number) {
    if (number < 1) return;
    var stack = new Stack();
    var fact = 1;
    while (number > 1) {
        stack.push(number);
        number = number - 1;
    }
    for (var num of stack.dataStore) {
        fact = fact * num;
    }
    console.log(fact);
}



//************************************************************
//************  Link list implementation for stack   *********
//************************************************************
function SinglyLinkedListNode(data) {
    this.data = data;
    this.next = null;
}

function SinglyLinkedList() {
    // insdert from starting
    function insertFromSatring(value) {
        var newNode = new SinglyLinkedListNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    // inser from the last
    function insertFromLast(value) {
        var newNode = new SinglyLinkedListNode(value);
        newNode.data = value;
        newNode.next = null;
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var temp = this.head;
        while (temp.next) {
            temp = temp.next;
        }
        // Now here temp only contains the reference of last node.
        temp.next = newNode;
        this.size++;
    }


    function display(head = this.head) {
        var temp = head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    function removeFromFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    function removeFromLast() {
        if (!this.head) {
            return null;
        }
        // if only one node in the list
        if (!this.head.next) {
            this.head = null;
            return;
        }
        var temp = this.head;
        var prev = null;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
        prev.next = null;
    }

    function remove(elem) {
        if (!this.head) {
            return;
        }
        var currentHead = this.head;
        if (currentHead.data === elem) {
            // if element present at head
            this.head = currentHead.next;
            this.size--;
        } else {
            var prev = currentHead;
            while (currentHead.next) {
                if (currentHead.data === elem) {
                    prev.next = currentHead.next;
                    break;
                }
                prev = currentHead;
                currentHead = currentHead.next;
            }
            this.size--;
        }
    }

    this.head = null;
    this.size = 0;
    this.display = display;
    this.insertFromSatring = insertFromSatring;
    this.insertFromLast = insertFromLast;
    this.removeFromFirst = removeFromFirst;
    this.removeFromLast = removeFromLast;
    this.remove = remove;
}

function StackLinkList() {
    var stachLinkList = new SinglyLinkedList();
    function push(elem) {
        stachLinkList.insertFromLast(elem);
    }
    function pop() {
        stachLinkList.removeFromLast();
    }
    function display() {
        stachLinkList.display();
    }
    this.push = push;
    this.pop = pop;
    this.display = display;
}


var stachLinkList = new StackLinkList();
stachLinkList.push(1);
stachLinkList.push(2);
stachLinkList.push(3);
stachLinkList.push(4);
stachLinkList.pop();
stachLinkList.display();