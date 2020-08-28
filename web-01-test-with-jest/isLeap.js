/**
 * @description isDivisibleBy() should take two numbers as the input,
 * and return true if the first one is divisible by the second
 * @param {number} n
 * @param {number} k
 * @return {boolean} whether n is divisible by k
 */
// YOUR CODE HERE
const isDivisibleBy = (n, k) => {
  return n % k === 0 ? true : false;
}
/**
 * @description isLeap() should take a number, year, as the input,
 * and return true if that year is a leap year, and false otherwise.
 * Leap year in the Gregorian calendar is defined as follow:
 * Every year that is evenly divisible by 4,
 * except every year that is evenly divisible by 100,
 * unless the year is also evenly divisible by 400
 * This function should use isDivisibleBy() as a helper function
 * @param {number} year
 * @return {boolean} whether the year is leap
 */
// YOUR CODE HERE
const isLeap = (year) => {
  return (isDivisibleBy(year, 4) && !isDivisibleBy(year, 100)) || isDivisibleBy(year, 400)
}
module.exports = isLeap;
