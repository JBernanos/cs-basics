class Node {
  public element: number;
  public left: Node | null = null;
  public right: Node | null = null;

  constructor(element: number) {
    this.element = element;
  }
}

export class BinarySearchTree {
  private root: Node | null;

  constructor(element: number) {
    this.root = new Node(element);
  }

  insert(element: number): void {
    if (this.root == null) this.root = new Node(element);
    else {
      let currentNode: Node | null = this.root;
      while (true) {
        if (element <= currentNode.element) {
          if (currentNode.left == null) {
            currentNode.left = new Node(element);
            break;
          } else currentNode = currentNode.left;
        } else {
          if (currentNode.right == null) {
            currentNode.right = new Node(element);
            break;
          } else currentNode = currentNode.right;
        }
      }
    }
  }

  search(element: number): boolean {
    let currentNode: Node | null = this.root;
    while (currentNode != null) {
      if (element == currentNode.element) return true;
      else if (element <= currentNode.element) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    return false;
  }

  printTree = () => console.log(this.root);
}
