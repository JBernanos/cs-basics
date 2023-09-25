export function bubbleSort(array: number[]): number[] {
  let acc = array.length;

  while (acc > 0) {
    for (let i = 0; i < acc; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      }
    }
    acc -= 1;
  }
  return array;
}