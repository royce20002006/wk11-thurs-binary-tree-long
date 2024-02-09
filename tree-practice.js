const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  if (!rootNode) {
    return -1
  }
  while (rootNode.left) {
    if (rootNode.left.val < rootNode.val) {
      rootNode = rootNode.left;
    }
  }
  return rootNode.val
}

function findMaxBST(rootNode) {
  if (!rootNode) {
    return -1
  }
  while (rootNode.right) {
    if (rootNode.right.val > rootNode.val) {
      rootNode = rootNode.right;
    }
  }
  return rootNode.val
}

function findMinBT(rootNode) {
  let que = [];

  let min = Infinity;

  que.push(rootNode)
  while (que.length) {
    let removed = que.shift();
    if (min > removed.val) {
      min = removed.val
    }
    if (removed.left) {

      que.push(removed.left);
    }
    //oh, hai!
    if (removed.right) {

      que.push(removed.right);
    }
  }
  return min;
}

function findMaxBT(rootNode) {
  let que = [];

  let max = -Infinity;

  que.push(rootNode)
  while (que.length) {
    let removed = que.shift();
    if (max < removed.val) {
      max = removed.val
    }
    if (removed.left) {

      que.push(removed.left);
    }

    if (removed.right) {

      que.push(removed.right);
    }
  }
  return max;
}

function getHeight(rootNode) {
  if (!rootNode) {
    return -1;
  } else if (!rootNode.left && !rootNode.right) {
    return 0;
  } else {
    const leftHeight = getHeight(rootNode.left);
    const rightHeight = getHeight(rootNode.right);
    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    } else {
      return rightHeight + 1;
    }
  }
}



function balancedTree(rootNode) {
  if (!rootNode) {
    return -1;
  } else if (!rootNode.left && !rootNode.right) {
    return 0;
  } else {
    let leftHeight = getHeight(rootNode.left);
    let rightHeight = getHeight(rootNode.right);
    if (leftHeight > rightHeight) {
      leftHeight++;
    } else {
      rightHeight++;
    }
    if (leftHeight === rightHeight ||
      leftHeight === rightHeight + 1 ||
      leftHeight === rightHeight - 1 ||
      rightHeight === leftHeight + 1 ||
      rightHeight === leftHeight - 1) {
      return true;
    } else return false;

  }
}

function countNodes(rootNode) {
  // Your code here
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

// btRoot = new TreeNode(1);
// btRoot.left = new TreeNode(2);
// btRoot.left.left = new TreeNode(4);
// btRoot.left.right = new TreeNode(5);
// btRoot.right = new TreeNode(3);
// btRoot.right.left = new TreeNode(6);
// btRoot.right.right = new TreeNode(7);

// console.log('get height call ', getHeight(btRoot));

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
