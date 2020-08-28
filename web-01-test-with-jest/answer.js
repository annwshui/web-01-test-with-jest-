function submission() {
  /**
   * Instructions:
   *
   * The array called `values` consists of 10 values.
   * Your task is to determine the data type of each value. Please write down each of the answers as a string in the `answers` array.
   *
   * Do not use any method to programatically produce the answer, or you will receive zero credit for this assessment.
   *
   * The first answer is given as an example.
   */

  let myValue;

  const values = [
    42,
    "JavaScript",
    new Date(),
    "7" + "8",
    "7" + 8,
    +"37",
    !true,
    !!37,
    NaN,
    myValue,
  ];

  const answers = [
    // put your answers here in strings, separated by comma
    // the first answer is provided as an example
    "number",
    // YOUR CODE HERE
    "string",
    "object",
    "string",
    "string",
    "number",
    "boolean",
    "boolean",
    "number",
    "undefined"
  ];

  return answers;
}

module.exports = submission;
