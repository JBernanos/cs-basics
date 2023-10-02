function qs(array: number[], low: number, high: number): void {
  if (low >= high) {
    return;
  }

  const pivotIndex = partition(array, low, high);

  qs(array, low, pivotIndex - 1);
  qs(array, pivotIndex + 1, high);
}

function partition(array: number[], low: number, high: number): number {
  const pivot = array[high];

  let index = low - 1;

  for (let i = low; i < high; i++) {
    if (array[i] <= pivot) {
      index++;
      const temp = array[i];
      array[i] = array[index];
      array[index] = temp;
    }
  }

  index++;
  array[high] = array[index];
  array[index] = pivot;

  return index;
}

export function quickSort(array: number[]): number[] {
  qs(array, 0, array.length - 1);
  return array;
}
