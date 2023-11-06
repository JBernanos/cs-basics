class Node {
  public element: number;
  public next: Node | null = null;

  constructor(element: number) {
    this.element = element;
  }
}

export class LinkedList {
  private head: Node | null;

  constructor(element: number) {
    this.head = new Node(element);
  }

  insertAtBegin(element: number) {
    const newNode = new Node(element);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtEnd(element: number) {
    if (this.head == null) this.head = new Node(element);
    else {
      let currentNode: Node | null = this.head;
      while (currentNode.next != null) currentNode = currentNode.next;
      currentNode.next = new Node(element);
    }
  }

  delete(element: number) {
    if (this.head?.element == element) {
      if (this.head.next != null) this.head = this.head.next;
      else this.head = null;
    } else {
      let currentNode: Node | null = this.head;
      while (currentNode?.next != null) {
        if (currentNode.next.element != element) currentNode = currentNode.next;
        else {
          if (currentNode.next.next != null) currentNode.next = currentNode.next.next;
          else currentNode.next = null;
        }
      }
    }
  }

  search(element: number) {
    let currentNode: Node | null = this.head;
    while (currentNode != null) {
      if (currentNode.element == element) return true;
      else currentNode = currentNode.next;
    }
    return false;
  }
}
