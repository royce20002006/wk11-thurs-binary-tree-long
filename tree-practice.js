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

function getParentNode(rootNode, target) {
  if (!rootNode) return null; // Base case: if the root is null, return null
  if(rootNode.val === target) return null;
  if (rootNode.left && rootNode.left.val === target) return rootNode; // Check if the left child of the root is the target

  if (rootNode.right && rootNode.right.val === target) return rootNode; // Check if the right child of the root is the target

  // Recursive calls to search in the left and right subtrees
  let leftResult = getParentNode(rootNode.left, target);
  let rightResult = getParentNode(rootNode.right, target);

  // Return the non-null result among leftResult and rightResult
  if (leftResult) return leftResult;
  else if (rightResult) return rightResult;
  else return undefined; // If target is not found in any subtree, return undefined
  
}


function inOrderPredecessor(root, target) {
  // base case if there is no root node
  if (!root) return null;
  
// check if the roots value is the target
  if (root.val === target) {
    //check to see if the left subtree exists
      if (root.left) {
        let tmp = root.left;
          while (tmp.right) {
            // find max value in the left subtree
              tmp = tmp.right;
          }
          // returns the max value in-order
          return tmp.val;
      }
      // there is no left subtree
      return null;
      // if root val is greater than target search the left subtree.
  } else if (root.val > target) {
    
      return inOrderPredecessor(root.left, target);
  } else {
    // if root val is less than target search the right subtree.
      let predecessor = inOrderPredecessor(root.right, target);
      return predecessor !== null ? predecessor : root.val;
  }
}


function deleteNodeBST(rootNode, target) {

    // You'll need to see if you're deleting the rootNode 
    // Or if your target is elsewhere in the tree
  
    let parent = getParentNode(rootNode, target);
  
    // If the target cannot be found, return undefined
    // Parent will be undefined if getParentNode() can't find target.
    if (parent === undefined) return undefined;
  
  
    // Parent will be null if getParentNode() finds no parents on target
    // This will mean our rootNode IS the target
    if (parent === null) {
  
      let rootChildren = 0;
      if (rootNode.left) rootChildren++;
      if (rootNode.right) rootChildren++;
  
  
      // Case 0: 0 children
      // Remember 0 is falsy, so we can make an if statement like this
      if (!rootChildren) return null
      // This would be a single node in a BST as the root
      // This isn't in the mocha tests, but its a logical edge case
      // There isn't a way to delete it as this data structure isn't like a linkedList
      // So returning null is as good as it gets
  
      // Case 1: 1 child
      else if (rootChildren === 1) {
        let child;
   
        // Lets practice a ternary. Remember, this is the same as an if else block
        // what's in front of "?" is the if() statement. After : is the else code.
        rootNode.left ? child = rootNode.left : child = rootNode.right;
        deleteNodeBST(rootNode, child.val);
        rootNode.val = child.val;
      }
  
      // Case 2: 2 children
      else {
        let successorVal = findMinBST(rootNode.right);
        deleteNodeBST(rootNode, successorVal);
        rootNode.val = successorVal;
      }
  
    } else {
  
  // If parent isn't undefined, or null
      // Then our target is either the left / right child of the parent
      let targetNode;
  
      let isLeft = false;
      
      // Is it the left?
      if (parent.left && parent.left.val === target) isLeft = true;
      // we do && because if parent.left is undefined/null
      // we'd get an error trying to check the val
  
      // else = target is right. leave isLeft false.
  
      isLeft ? targetNode = parent.left : targetNode = parent.right;
  
      let targetChildren = 0;
      if (targetNode.left) targetChildren++;
      if (targetNode.right) targetChildren++;
  
      // Case 0: 0 children
      if (!targetChildren) isLeft ? parent.left = null : parent.right = null;
  
      // Case 1: 1 child
      else if (targetChildren === 1) {
        let child;
        // is the child on left or right of target
        targetNode.left ? child = targetNode.left : child = targetNode.right;
  
        // cut the target by connecting target's parent to target's child
        isLeft ? parent.left = child : parent.right = child;
      }
  
      else { // 2 Children
        let successorVal = findMinBST(targetNode.right);
        deleteNodeBST(rootNode, successorVal);
        targetNode.val = successorVal;
      }
    
  }
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
