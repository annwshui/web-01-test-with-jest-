/**
 * @description collatz() should take a number, n, as the input
 * if n is even, the return value should be n divided by 2
 * if n is odd, the return value should be n times 3, then plus 1
 * @param {number} n
 * @return {number} result of the collatz function, as specified above
 */
function collatz(n) {
  // YOUR CODE HERE
  return n % 2 == 0 ? n / 2 : (n * 3) + 1
}
/**
 * @description Collatz conjecture
 * A Collatz sequence starts with any positive integer n,
 * the next number in the sequence is the result of applying collatz() to the current number
 * The sequence stops when it reaches 1
 * For example, if the sequence starts with 5, the sequence will be: 5,16,8,4,2,1
 * if the sequence starts with 11, the sequence will be: 11,34,17,52,26,13,40,20,10,5,16,8,4,2,1
 * The Collatz Conjecture hypothesizes that the sequence will eventually reach 1 for any starting number
 * This function should take a number n as the input, and return the sum of all numbers in the sequence. If n is a negative number, the function should throw an error
 * @param {number} n
 * @return {number} sum of all numbers in the sequence
 */
function collatzSequenceSum(n) {
  // YOUR CODE HERE
  if (n > 0) {
    let sequence = []
    while (n != 1) {
      sequence.push(n)
      n = collatz(n)
    }
    sequence.push(n)
    let sum = 0;
    for (var i  = 0; i < sequence.length; i++){
      sum  += sequence[i];
    }
    return sum
  } else {
    throw new Error('should throw an error for negative input')
  }
}
module.exports = collatzSequenceSum;
