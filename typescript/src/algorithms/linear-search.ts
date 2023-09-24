export function linearSearch(array: number[], elementToFind: number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == elementToFind) return true;
  }
  return false;
}
