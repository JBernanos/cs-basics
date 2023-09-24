export class Stack {
  private elements: number[];
  private capacity: number;

  constructor(capacity: number) {
    this.elements = [];
    this.capacity = capacity;
  }

  isFull(): boolean {
    return this.elements.length == this.capacity;
  }

  isEmpty(): boolean {
    return this.elements.length == 0;
  }

  size(): number {
    return this.elements.length;
  }

  push(element: number): void {
    if (!this.isFull()) this.elements.push(element);
  }

  pop(): number | undefined {
    if (!this.isEmpty()) return this.elements.pop();
  }

  top(): number | undefined {
    if (!this.isEmpty()) return this.elements[this.elements.length - 1];
  }
}
