const fibonacci = require("../fibonacci");

describe("fibonacci.js", function () {
  test("first 10 fibonacci numbers", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(7)).toBe(13);
    expect(fibonacci(8)).toBe(21);
    expect(fibonacci(9)).toBe(34);
  });
  test("very large fibonacci numbers", () => {
    expect(fibonacci(1000)).toBe(4.346655768693743e208);
  });
  test("should throw an error for negative input", () => {
    expect(() => {
      fibonacci(-1);
    }).toThrow();
  });
});
