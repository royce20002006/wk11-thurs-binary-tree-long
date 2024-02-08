// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here 
// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;

  }

  insert(val, currentNode=this.root) {
    let nn = new TreeNode(val)
    if(!this.root) {
      this.root = nn;
    } else if (nn.val < currentNode.val) {
      if(currentNode.left) {
        return this.insert(val, currentNode=currentNode.left)
      } else {
        currentNode.left = nn;
      }
    } else if(nn.val > currentNode.val) {
      if(currentNode.right){
        return this.insert(val, currentNode=currentNode.right)
      } else{
        currentNode.right = nn;
      }
    } else return console.error('Cannot be duplicate value!!')
  }

  search(val, currentNode = this.root) {
    // Your code here
    if (!currentNode) {
      return false;
    }
    if (currentNode.val === val) {
      return true
    } else if (val < currentNode.val) {
      return this.search(val, currentNode = currentNode.left)
    } else if (val > currentNode.val) {
      return this.search(val, currentNode = currentNode.right)
    }
  }


  preOrderTraversal(currentNode = this.root) {
    if (currentNode) {
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
  }


  inOrderTraversal(currentNode = this.root) {
    if (currentNode) {
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right)
    }
  }


  postOrderTraversal(currentNode = this.root) {
    if (currentNode) {
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let que = [];

    que.push(this.root)
    while(que.length) {
      let removed = que.shift();

      console.log(removed.val);
      if (removed.left) {

        que.push(removed.left);
      }

      if (removed.right) {

        que.push(removed.right);
      }
    }
    
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    let stack = [];
    stack.push(this.root);
    while(stack.length) {
      let removed = stack.pop();
      console.log(removed.val);
      if(removed.left) stack.push(removed.left)
      if(removed.right) stack.push(removed.right);
      
    }
  }
}
let bst = new BinarySearchTree()

bst.insert(4);
bst.insert(0);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);
console.log(bst.search(6));
console.log(bst.search(2));


module.exports = { BinarySearchTree, TreeNode };
