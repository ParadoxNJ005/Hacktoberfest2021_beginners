// Sample array to be sorted
const unsortedArray = [5, 2, 9, 1, 5, 6];

// Using the sort() method to sort the array in ascending order
const sortedArray = unsortedArray.sort(function (a, b) {
  // The callback function compares two elements, a and b
  // If a should come before b, return a negative value (e.g., a - b)
  // If a should come after b, return a positive value (e.g., b - a)
  // If a and b are equal, return 0
  return a - b;
});

// Display the sorted array
console.log(sortedArray);
