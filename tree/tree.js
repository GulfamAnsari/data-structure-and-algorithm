// Generic tree

class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendents = []; // childrens
    }
}

// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

console.log(abe);
