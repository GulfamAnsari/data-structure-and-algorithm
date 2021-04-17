function Node(value) {
    this.data = value;
    this.next = null;
}

function CircularLinkList() {
    this.size = null;
    this.head = null;
    this.insertFromStarting = insertFromStarting;
    this.display = display;
    this.isCircular = isCircular;

    function insertFromStarting(value) {
        var node = new Node(value);
        this.size++;
        if (this.head == null) {
            this.head = node;
            node.next = this.head;
            return;
        } else if (this.head == this.head.next) {
            this.head.next = node;
            node.next = this.head;
        } else {
            node.next = this.head.next;
            this.head.next = node;
        }
    }

    function display() {
        if (!this.head) {
            return;
        }
        var temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
            if (temp === this.head) {
                return;
            }
        }
    }

    function isCircular() {
        var temp = this.head;
        while (temp != null) {
            temp = temp.next;
            if (temp == this.head) {
                return true;
            }
        }
        return false;
    }
    
}

var cl = new CircularLinkList();
cl.insertFromStarting(1);
cl.insertFromStarting(2);
cl.insertFromStarting(3);
cl.insertFromStarting(4);
cl.display();
console.log(cl.isCircular());
console.log(cl.head);