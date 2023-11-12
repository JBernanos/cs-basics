class Node {
  public element: number;
  public next: Node | null = null;

  constructor(element: number) {
    this.element = element;
  }
}
export class Stack {
  private topNode: Node | null;

  constructor(element: number) {
    this.topNode = new Node(element);
  }

  isEmpty(): boolean {
    return this.topNode == null ? true : false;
  }

  size(): number {
    let currentNode = this.topNode;
    if (currentNode == null) return 0;

    let nodesCount: number = 0;
    while (currentNode != null) {
      nodesCount += 1;
      currentNode = currentNode.next;
    }
    return nodesCount;
  }

  push(element: number) {
    const newNode = new Node(element);
    newNode.next = this.topNode;
    this.topNode = newNode;
  }

  pop() {
    if (this.topNode?.next) {
      this.topNode = this.topNode.next;
    } else this.topNode = null;
  }

  top(): number | null {
    return this.topNode != null ? this.topNode.element : null;
  }
}
