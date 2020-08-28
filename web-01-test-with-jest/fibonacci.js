/**
 * @description the zeroth fibonacci number is 0. the first fibonacci number is 1.
 * For n>=2, the nth fibonacci number is the sum of the (n-1)th, and (n-2)th fibonacci numbers.
 * Use any loop structure you have learned. Do not attempt to use recursion to solve this problem.
 * If n is a negative number, the function should throw an error
 * @param {number} n
 * @return {number} the nth fibonacci number
 */
function fibonacci(n) {
  // YOUR CODE HERE
  if (n >= 0) {
    let zero = 0
    let start = 1
    let last = 0
    for(let i = 2; i <= n; i++) {
      last = zero + start
      zero = start
      start = last
    }
    return n ? start : zero
  } else {
    throw new Error('should throw an error for negative input')
  }
}
module.exports = fibonacci;
