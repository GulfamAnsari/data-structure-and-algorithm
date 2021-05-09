function BinarySearchTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this._root = null;

    function insertIntoBinaryTree(value) {
        var node = new BinarySearchTreeNode(value);
        if (this._root) {
            insertNode(this._root, node)
        } else {
            this._root = node;
        }
    }

    function insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null)
                node.left = newNode;
            else
                insertNode(node.left, newNode);
        }
        else {
            if (node.right === null)
                node.right = newNode;
            else
                insertNode(node.right, newNode);
        }
    }

    function search(key, root) {
        if (root == null) {
            return null; 
        } else if(key > root.value) {
            return search(key, root.right);
        } else if(key < root.value) {
            return search(key, root.left);
        } else {
            console.log('element found');
        } 
    }

    this.insertIntoBinaryTree = insertIntoBinaryTree;
    this.search = search;
}

var bst = new BinarySearchTree();
bst.insertIntoBinaryTree(22);
bst.insertIntoBinaryTree(3);
bst.insertIntoBinaryTree(5);
bst.insertIntoBinaryTree(8);
bst.insertIntoBinaryTree(11);
bst.insertIntoBinaryTree(0);
bst.insertIntoBinaryTree(12);
bst.insertIntoBinaryTree(9);
bst.search(8, bst._root);