export class myArray {
  public elements: number[];
  public sortedElements: number[];

  constructor(arraySize: number, higherNumber: number) {
    this.elements = this.fillArray(arraySize, higherNumber);
    this.sortedElements = this.elements.slice(0).sort((a, b) => a - b);
  }

  private fillArray(arraySize: number, higherNumber: number): number[] {
    let array: number[] = [];
    while (array.length < arraySize) {
      let randomNumber = Math.floor(Math.random() * (higherNumber - 0) + 0);
      if (array.length < higherNumber) {
        if (!array.includes(randomNumber)) array.push(randomNumber);
      } else array.push(randomNumber);
    }
    return array;
  }
}
