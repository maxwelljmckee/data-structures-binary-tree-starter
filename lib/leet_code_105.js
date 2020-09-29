// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


function buildTree(preorder, inorder) {
  if (!preorder.length) return [];

  const rootVal = preorder[0];
  const rootNode = new TreeNode(rootVal);
  if (preorder.length > 1) {
    const inOrderLeft = inorder.slice(0, inorder.indexOf(rootVal));
    const inOrderRight = inorder.slice(inorder.indexOf(rootVal) + 1);
    let preOrderLeft;
    let preOrderRight;

    for (let i = 1; i < preorder.length; i++) {
      if (!inOrderLeft.includes(preorder[i])) {
        preOrderLeft = preorder.slice(1, i);
        preOrderRight = preorder.slice(i);
        break;
      }
    }
    rootNode.left = buildTree(preOrderLeft, inOrderLeft);
    rootNode.right = buildTree(preOrderRight, inOrderRight);
  }


  return rootNode;
}

preorder = [3, 9, 20, 15, 7]
inorder = [9, 3, 15, 20, 7]

console.log(buildTree(preorder, inorder));

// left = [9]
// right = [15, 20, 7]

// pre = [3, 9, 20, 15, 4, 12, 7, 2, 8]
// in = [9, 3, 4, 15, 12, 20, 2, 7, 8]


//         3
//     9         20
//         15         7
//        4   12  |  2   8

//          --------

//         3
//     9       7
//  20  15
// [20, 9, 15, 3, 7]
