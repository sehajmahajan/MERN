// 4. Write a function that takes a nested array and returns a flattened array (an array without any nested arrays).
// Example: if we pass this array const nestedArray = [1, [2, [3, [4, 5]]]]; we get [1,2,3,4,5] flattened array 

const nestedArray = [1, [2, [3, [4, 5]]]]

array = [nestedArray[0],...nestedArray[1]];
array1 = [array[0],array[1],...array[2]];
array2 = [array1[0],array1[1],array1[2],...array1[3]];
console.log(array2)