const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      this.addNode(this.root, newNode);
    }
  }

    addNode(currNode, newNode) {
      if (currNode.data > newNode.data) {
        if (!currNode.left) {
          currNode.left = newNode;
        } else {
          this.addNode(currNode.left, newNode);
        }
      } else {
        if (!currNode.right) {
          currNode.right = newNode;
        } else {
          this.addNode(currNode.right, newNode);
        }
      }
    }

  has(data) {
    return this.find(data);
  }

  find(data) {
    if (!this.rootNode) {
      return null
    };
    if (this.rootNode.data > data) {
      return this.lookFor(this.rootNode.left, data);
    }
    if (this.rootNode.data < data) {
      return this.lookFor(this.rootNode.right, data);
    }
    return this.rootNode;
  }

    lookFor(currNode, data) {
      if (!currNode) {
        return null;
      };
      if (currNode.data > data) {
        return this.lookFor(currNode.left, data);
      } 
      if (currNode.data < data) {
        return this.lookFor(currNode.right, data);
      }
      return currNode;
    }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootNode.left) {
      return this.rootNode;
    } else {
      return this.lookForMin(this.rootNode.left)
    }
  }

  lookForMin(currNode) {
    if (!currNode.left) {
      return currNode
    } else {
      return this.lookForMin(currNode.left)
    }
  }

  max() {
    if (!this.rootNode.right) {
      return this.rootNode;
    } else {
      return this.lookForMax(this.rootNode.right)
    }
  }

lookForMax(currNode) {
  if (!currNode.right) {
    return currNode
  } else {
    return this.lookForMin(currNode.right)
  }
}
}

module.exports = {
  BinarySearchTree
};