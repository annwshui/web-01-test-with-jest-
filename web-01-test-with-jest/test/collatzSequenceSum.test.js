const collatzSequenceSum = require('../collatzSequenceSum');

describe("collatzSequenceSum.js", function () {
  test("should throw an error for negative input", () => {
    expect(() => {
      collatzSequenceSum(-1);
    }).toThrow();
  });
  test("collatzSequenceSum for one number", () => {
    expect(collatzSequenceSum(1)).toBe(1);
  });
  test("collatzSequenceSum for a short sequence", () => {
    expect(collatzSequenceSum(11)).toBe(259);
  });
  test("collatzSequenceSum for a longer sequence", () => {
    expect(collatzSequenceSum(255)).toBe(65334);
  });
});
