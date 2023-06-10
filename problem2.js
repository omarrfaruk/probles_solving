/*
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
Input: The first line of the input is the marks of the five subjects mentioned above, respectively. Output: Print the result in 2 decimal places.

Practice Problem 2

Sample Input: 75.25, 65, 80, 35.45, 99.50 Output: 71.04
 */

function aveMarks(numbers) {
  const total = numbers.reduce((a, b) => a + b, 0);
  return (total / numbers.length).toFixed(2);
}
const numbers = [75.25, 65, 80, 35.45, 99.5];
console.log(aveMarks(numbers));
