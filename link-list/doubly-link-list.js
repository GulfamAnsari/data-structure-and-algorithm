// corner cases not covered
function DoublyLinkedListNode(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList() {

    function insertAtFront(value) {
        var node = new DoublyLinkedListNode(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;

    }

    function insertFromLast(value) {
        var node = new DoublyLinkedListNode(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    function deleteFromHead() {
        if (this.head === null) return

        if (this.head === this.tail) {
            this.head = this.tail = null;
            return
        }

        this.head = this.head.next;
        this.head.prev = null;
        --this.size;
    }

    function deleteFromTail() {
        if (this.tail === null) return

        if (this.head === this.tail) {
            this.head = this.tail = null;
            return
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
        --this.size;
    }

    function deleteLinkList(value) {
        var temp = this.head;
        var prevNode = null;
        var nextNode = null;
        while (temp.data !== value) {
            temp = temp.next;
            nextNode = temp.next;
            prevNode = temp.prev;
        }
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        --this.size;
    }

    function display() {
        var temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    this.head = null;
    this.tail = null;
    this.size = 0;
    this.insertAtFront = insertAtFront;
    this.insertFromLast = insertFromLast;
    this.deleteFromHead = deleteFromHead;
    this.deleteFromTail = deleteFromTail;
    this.deleteLinkList = deleteLinkList;
    this.display = display;
}

var doubleLinkList = new DoublyLinkedList();
doubleLinkList.insertAtFront(2);
doubleLinkList.insertAtFront(3);
doubleLinkList.insertAtFront(6);
doubleLinkList.insertFromLast(5);
doubleLinkList.insertAtFront(32);
doubleLinkList.insertFromLast(56);
doubleLinkList.deleteFromHead();
doubleLinkList.deleteFromTail();
doubleLinkList.deleteLinkList(3);
doubleLinkList.display();

console.log(doubleLinkList.head);