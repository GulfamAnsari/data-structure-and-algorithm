function BinaryTreeNode(value) {
    this.left = null;
    this.right = null;
    this.value = value;

}

function BinaryTree() {
    this._root = null;

    function insertLeft(value) {
        var node = new BinaryTreeNode(value);
        if (this._root) {
            insert(this._root, node, 'left');
        } else {
            this._root = node;
        }
    }

    function insertRight(value) {
        var node = new BinaryTreeNode(value);
        if (this._root) {
            insert(this._root, node, 'right');
        } else {
            this._root = node;
        }
    }

    function levelOrderTraversal() {
        var root = this._root;
        var queqe = [];
        var result = [];
        if (!root) return;
        queqe.push(root);
        while (queqe.length) {
            var popElement = queqe.shift();
            result.push(popElement.value);
            if (popElement.left) {
                queqe.push(popElement.left);
            }
            if (popElement.right) {
                queqe.push(popElement.right);
            }
        }
        return result;
    }

    function preOrderTraversal(root) {
        if (root) {
            console.log(root.value);
            preOrderTraversal(root.left);
            preOrderTraversal(root.right);
        }
    }

    function preOrderTraversalUsingstack() {
        var root = this._root;
        var stack = [];
        var result = [];
        if (!root) return;
        stack.push(root);
        while (stack.length) {
            var popElement = stack.pop();
            result.push(popElement.value);
            if (popElement.right) {
                stack.push(popElement.right);
            }
            if (popElement.left) {
                stack.push(popElement.left);
            }
        }
        return result;
    }

    function inOrderTraversal(root) {
        if (root) {
            inOrderTraversal(root.left);
            console.log(root.value);
            inOrderTraversal(root.right);
        }
    }

    function inOrderTraversalUsingStack() {
        var root, current = this._root;
        var leftSubtreeCompleted = false;
        var stack = [];
        var result = [];
        while (!leftSubtreeCompleted) {
            if (current) {
                stack.push(current);
                current = current.left;
            } else {
                if (stack.length) {
                    var pop = stack.pop();
                    result.push(pop.value);
                    current = pop.right;
                } else {
                    leftSubtreeCompleted = true;
                }

            }
        }
        return result;
    }

    function postOrderTraversal(root) {
        if (root) {
            postOrderTraversal(root.left);
            postOrderTraversal(root.right);
            console.log(root.value);
        }
    }

    function postOrderTraversalUsingStack() {
        var root = this._root;
        var stack = [];
        var result = [];
        stack.push(root);
        while (stack.length) {
            var pop = stack.pop();
            result.push(pop.value);
            if (pop.left) {
                stack.push(pop.left)
            }
            if (pop.right) {
                stack.push(pop.right)
            }
        }
        var reverseResult = [];
        while(result.length) {
            reverseResult.push(result.pop());
        }
        return reverseResult;

    }

    function insert(root, node, dir) {
        switch (dir) {
            case 'left':
                if (root.left) {
                    insert(root.left, node, 'left');
                } else {
                    root.left = node;
                }
                break;

            case 'right':
                if (root.right) {
                    insert(root.right, node, 'right');
                } else {
                    root.right = node;
                }
                break;
            default:
                break;
        }

    }

    this.insertLeft = insertLeft;
    this.insertRight = insertRight;
    this.inOrderTraversal = inOrderTraversal;
    this.preOrderTraversal = preOrderTraversal;
    this.postOrderTraversal = postOrderTraversal;
    this.levelOrderTraversal = levelOrderTraversal;
    this.preOrderTraversalUsingstack = preOrderTraversalUsingstack;
    this.inOrderTraversalUsingStack = inOrderTraversalUsingStack;
    this.postOrderTraversalUsingStack = postOrderTraversalUsingStack;
}

var bt = new BinaryTree();
bt.insertLeft(1);
bt.insertLeft(2);
bt.insertRight(3);
bt.insertRight(4);
bt.insertRight(5);
console.log(bt.postOrderTraversal(bt._root));
console.log(bt.postOrderTraversalUsingStack());

