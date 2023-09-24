// Data Structures
import { myArray } from "./data-structures/Array";

// Algorithms
import { linearSearch } from "./algorithms/linear-search";

function main() {
  const array = new myArray(10, 15);
  console.log(`Elements: ${array.elements}`);
  console.log(`Sorted elements: ${array.sortedElements}`);
  console.log(`Linear search result: ${linearSearch(array.elements, 5)}`);
}

main();