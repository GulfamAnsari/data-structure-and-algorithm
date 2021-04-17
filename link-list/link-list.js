// linkList in Javascript = { data: 1, { data: 2, { data: 3, null }}}
// In C the next store the location of next node while in javascript the next stores the complete node because the object
// in javaScript is sroted as a referance


// Implementation of singly link-list
function SinglyLinkedListNode(data) {
    this.data = data;
    this.next = null;
}

function SinglyLinkedList() {
    this.size = 0
    this.head = null;
    this.insertFromStarting = insertFromStarting;
    this.insertFromLast = insertFromLast;
    this.removeFromStarting = removeFromStarting;
    this.removeFromLast = removeFromLast;
    this.display = display;
    this.remove = remove;

    function insertFromStarting(element) {
        var node = new SinglyLinkedListNode(element);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    function insertFromLast(element) {
        var node = new SinglyLinkedListNode(element);
        node.next = null;
        if (this.head === null) {
            this.head = node;
        }
        var temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = node;
        this.size++;
    }

    function removeFromStarting() {
        if (this.head === null) {
            return;
        }
        if (this.head.next === null) {
            this.head = null;
            this.size--;
            return;
        }
        this.head = this.head.next;
        this.size--;
    }

    function removeFromLast() {
        if (this.head === null) {
            return;
        }
        if (this.head.next === null) {
            this.head = null;
            this.size--;
            return;
        }
        var temp = this.head;
        var prevNode = temp;
        while(temp.next !== null) {
            prevNode = temp;
            temp = temp.next;
        }
        prevNode.next = null;
        this.size--;
    }

    function remove(element) {
        if (this.head == null) {
            return;
        }
        if (this.head.data == element) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        var nextNode = this.head;
        var prevNode = this.head;
        while (nextNode.data !== element) {
            prevNode = nextNode;
            nextNode = nextNode.next;
        }
        prevNode.next = nextNode.next;
        this.size--;
    }

    function display() {
        var temp = this.head;
        while(temp !== null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}
var ll = new SinglyLinkedList();
ll.insertFromStarting(1);
ll.insertFromStarting(4);
ll.insertFromStarting(19);
ll.insertFromStarting(5);
ll.insertFromStarting(2);
ll.insertFromStarting(6);
ll.insertFromLast(100);
ll.insertFromLast(300);
ll.insertFromLast(700);
ll.insertFromLast(800);
ll.insertFromLast(800);
ll.removeFromStarting();
ll.removeFromStarting();
ll.removeFromStarting();
ll.removeFromLast();
ll.removeFromLast();
ll.removeFromLast();
ll.removeFromLast();
ll.remove(4);
ll.display();
console.log('size is', ll.size)