class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  find(value) {
    if (this.root == null) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (current.value === value) {
        found = true;
      } else if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current ? current : undefined;
    //   if (current.value > value) {
    //     if (current.left) {
    //       current = current.left;
    //     } else {
    //       return false;
    //     }
    //   } else if (current.value < value) {
    //     if (current.right) {
    //       current = current.right;
    //     } else {
    //       return false;
    //     }
    //   }
    // }
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root == null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (value == current.value) return undefined;

        if (value < current.value) {
          if (current.left == null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (current.right == null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }

    // create a new node
    // starting at the root
    // if there is no root then make the new node the root
    // is the value greater than or less than the root?
    // keep checking if it's greater than or less than
    // once you hit null value in the "right" place put it there!

    //  return this - the entire tree at the end/
  }
}

var tree = new BinarySearchTree();
console.log(tree.insert(5));
console.log(tree.insert(19));
console.log(tree.insert(3));
console.log(tree.find(19));
console.log(tree.find(1));

// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
