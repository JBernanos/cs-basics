export class Queue {
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

  enqueue(element: number): void {
    if (!this.isFull()) this.elements.push(element);
  }

  dequeue(): void {
    if (!this.isEmpty()) this.elements.shift();
  }

  front(): number | undefined {
    if (!this.isEmpty()) return this.elements[0];
  }

  rear(): number | undefined {
    if (!this.isEmpty()) return this.elements[this.elements.length - 1];
  }
}
