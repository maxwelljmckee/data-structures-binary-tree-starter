function inOrderArray(root) {
  const ordered = [];
  // if the root is null, return an empty array
  if (!root) return ordered;

  // get the array for visiting the left node
  // get the array for visiting the right node
  if (root.left) {
    ordered.push(...inOrderArray(root.left));
  }
  ordered.push(root.val);
  if (root.right) {
    ordered.push(...inOrderArray(root.right));
  }

  // return the left array concatenated with the root value
  //   concatenated with the right array
  return ordered;
}

function postOrderArray(root) {
  // if the root is null, return an empty array

  // get the array for visiting the left node
  // get the array for visiting the right node

  // return the left array concatenated with the right array
  //   concatenated with the root value
}


module.exports = {
  inOrderArray,
  postOrderArray
};
