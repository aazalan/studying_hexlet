class Node {
    constructor(key = null, child1 = null, child2 = null) {
      this.key = key;
      this.child1 = child1;
      this.child2 = child2;
    }
    getKey() {
      return this.key;
    }
    getLeft() {
      if (this.child1 !== null) {
        return this.child1.key < this.child2.key ? this.child1 : this.child2;
      }
      return null;
    }
    getRight() {
      if (this.child1 !== null) {
        return this.child1.key > this.child2.key ? this.child1 : this.child2;
      }
      return null;
    }
    search(key) {
      if (key > this.key){
        const rightNode = new Node(this.getRight().getKey(), this.getRight().getLeft().getKey(), this.getRight().getRight().getKey())
        rightNode.search(key);
      }
      if (key < this.key) {
        const leftNode = new Node(this.getLeft().getKey(), this.getLeft().getLeft().getKey(), this.getLeft().getRight().getKey())
        leftNode.search(key);
      }
      if (key === this.key) {
        return this;
      }
      return new Node(key);
    }
  }
  
  export default Node;