const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  if (!rootNode) {
    return -1
  }
  while (rootNode.left) {
    rootNode = rootNode.left;
  }
  return rootNode.val
}

function findMaxBST(rootNode) {
  if (!rootNode) {
    return -1
  }
  while (rootNode.right) {
    rootNode = rootNode.right;
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
    //work
    if (removed.left) {

      que.push(removed.left);
    }

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
    return true;
  }


  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);
  if (Math.abs(leftHeight - rightHeight) <= 1 && balancedTree(rootNode.left) && balancedTree(rootNode.right)) {
    return true;
  }

  return false;
}

function countNodes(rootNode) {

  let counter = 0;

  if (!rootNode) {
    return 0;
  }
  if (!rootNode.left && !rootNode.right) {
    return 1;
  }
  let stack = [rootNode];
  while (stack.length) {
    let removed = stack.pop()
    counter++;
    if (removed.left) {
      stack.push(removed.left)
    }
    if (removed.right) {
      stack.push(removed.right)
    }
  }
  return counter;
}

function getParentNode(rootNode, target,) {
  /*
  set variable to hold prev root
  iterate through tree to the target
  return prev root
  */
  if (!rootNode) {
    return null;
  }
  if (target === rootNode.val) {
    return null;
  }


  // let queue = [rootNode]
  // let prev = rootNode.val
  // while (queue.length) {
  //   let removed = queue.shift();

  //   if (target === removed.val) {
  //     return prev;
  //   }

  //   if (removed.right) {
  //     prev = removed
  //     queue.push(removed.right)
  //   }
  //   if (removed.left) {
  //     prev = removed
  //     queue.push(removed.left)
  //   }

  // }
  return undefined;
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
