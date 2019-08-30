const BinarySearchTree = require('./bst');

function numberBST(arr = [3, 1, 4, 6, 9, 2, 5, 7]) {
  let BST = new BinarySearchTree();
  arr.forEach(i => BST.insert(i, i))
  return BST
}

function letterBST(arr = 'EASYQUESTION'.split('')) {
  let BST = new BinarySearchTree();
  arr.forEach(i => BST.insert(i, i))
  return BST
}

function height(tree) {
  /*
    1. Script needs to go down each path in the tree, return longest number
    2. Probably O(n) complexity to ensure that the height returned is correct
  */
}

function isBST(tree) {
  /*
    Go through each parent and pair of children in tree
    Return true if parent is less than right child or greater than left child
    Else, return false
  */
}

function thirdLargestNode(tree) {
  /*
    Largest node in BST should be all the way to the right, start there
    If largest node has sibling, return sibling
    Else see if largest node's grandparent has children
    Compare from there
  */
}

function isBalanced(tree) {
  /*
    Find leftmost leaf, track min and max distances from root
    Go through leaves (i.e., left & right both == null), adjust max and min distances
    While (max - min !<= 1) loop
  */
}

function sameTrees(treeA, treeB) {
  /*
    Figure out how to compare expected results without performing operation
  */
}

module.exports = {
  numberBST,
  letterBST,
}