export function binarySearch(array: number[], elementToFind: number): boolean {
  let low: number = 0;
  let high: number = array.length;

  do {
    let middle = Math.floor(low + (high - low) / 2);
    if (array[middle] == elementToFind) return true;
    else if (array[middle] > elementToFind) high = middle;
    else low = middle + 1;
  } while (low < high);

  return false;
}

export function recursiveBinarySearch(array: number[], elementToFind: number, low: number, high: number): boolean {
  if (low >= high) return false;

  let middle = Math.floor(low + (high - low) / 2);
  if (array[middle] == elementToFind) return true;
  else if (array[middle] > elementToFind) return recursiveBinarySearch(array, elementToFind, low, middle);
  else return recursiveBinarySearch(array, elementToFind, middle + 1, high);
}
