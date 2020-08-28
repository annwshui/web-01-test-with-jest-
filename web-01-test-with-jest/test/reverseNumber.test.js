const reverseNumber = require("../reverseNumber");

describe("reverseNumber.js", function () {
  test("reverse 0", () => {
    expect(reverseNumber(0)).toBe(0);
  });
  test("reverse some numbers", () => {
    expect(reverseNumber(35)).toBe(53);
    expect(reverseNumber(444)).toBe(444);
    expect(reverseNumber(123)).toBe(321);
  });
  test("reverse numbers ending with 0", () => {
    expect(reverseNumber(150)).toBe(51);
  });
  test("reverse large numbers", () => {
    expect(reverseNumber(1000000000000)).toBe(1);
    expect(reverseNumber(123456789)).toBe(987654321);
  });
  test("should throw an error for negative input", () => {
    expect(() => {
      reverseNumber(-1);
    }).toThrow();
  });
});
