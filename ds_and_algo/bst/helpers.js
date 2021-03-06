const TreeNode = require('./TreeNode');
const Trunk = require('./Trunk');

function insert(node, value) {
    if (node.value > value) {
        if (node.left === null) {
            node.left = new TreeNode(value, node);
            return;
        }
        insert(node.left, value);
    } else if (node.value < value) {
        if (node.right === null) {
            node.right = new TreeNode(value, node);
            return;
        }
        insert(node.right, value);
    } else {
        throw new Error('equal node values not implemented yet');
    }
}

function find(value, node) {
    if (node === null) {
        return false;
    }
    if (node.value === value) {
        return true;
    }
    if (node.value < value) {
        if (node.right) {
            return find(value, node.right);
        }
    } else if (node.left) {
        return find(value, node.left);
    }
    return false;
}

// Helper function to print branches of the binary tree
function showTrunks(p) {
    if (p === null) {
        return;
    }

    showTrunks(p.parent);
    process.stdout.write(p.text);
}

// Recursive function to print binary tree
// It uses inorder traversal
function printTree(node, parent, isRight) {
    if (node === null) {
        return;
    }

    let prev_str = '    ';
    let trunk = new Trunk(parent, prev_str);

    this.printTree(node.right, trunk, true);

    if (parent === null) {
        trunk.text = '---';
    } else if (isRight) {
        trunk.text = '.---';
        prev_str = '   |';
    } else {
        trunk.text = '`---';
        parent.text = prev_str;
    }

    showTrunks(trunk);
    console.log(node.value);

    if (parent !== null) {
        parent.text = prev_str;
    }
    trunk.text = '   |';

    this.printTree(node.left, trunk, false);
}

function inOrder(arr, node) {
    if (node.left !== null) {
        inOrder(arr, node.left);
    }
    arr.push(node.value);
    if (node.right !== null) {
        inOrder(arr, node.right);
    }
}

function getHeight(node) {
    if (node === null) {
        return 0;
    }
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

function isBalanced(node) {
    if (node === null) {
        return true;
    }
    const leftH = getHeight(node.left);
    const rightH = getHeight(node.right);

    if (Math.abs(leftH - rightH) < 2 && isBalanced(node.left) && isBalanced(node.right)) {
        return true;
    }
    return false;
}

module.exports = {
    insert: insert,
    find: find,
    printTree: printTree,
    inOrder: inOrder,
    getHeight: getHeight,
    isBalanced: isBalanced
};
