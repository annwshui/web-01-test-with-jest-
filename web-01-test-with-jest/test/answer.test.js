const submission = require("../answer");

test("Data types", () => {
  const studentAnswers = submission();

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

  expect(values.map((value) => typeof value)).toEqual(studentAnswers);
});
