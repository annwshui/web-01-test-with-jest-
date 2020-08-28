const {
  isEquilateral,
  isIsosceles,
  isScalene,
  isRight,
} = require("../triangle.js");

describe("Triangle", function () {
  test("isEquilateral()", () => {
    expect(isEquilateral(3, 3, 3)).toBe(true);
    expect(isEquilateral(2, 3, 3)).toBe(false);
    expect(isEquilateral(1, 2, 3)).toBe(false);
    expect(isEquilateral(5, 4, 3)).toBe(false);
  });
  test("isIsosceles()", () => {
    expect(isIsosceles(3, 3, 3)).toBe(true);
    expect(isIsosceles(2, 3, 3)).toBe(true);
    expect(isIsosceles(1, 2, 3)).toBe(false);
    expect(isIsosceles(5, 4, 3)).toBe(false);
  });
  test("isScalene()", () => {
    expect(isScalene(3, 3, 3)).toBe(false);
    expect(isScalene(2, 3, 3)).toBe(false);
    expect(isScalene(1, 2, 3)).toBe(true);
    expect(isScalene(5, 4, 3)).toBe(true);
  });
  test("isRight()", () => {
    expect(isRight(3, 3, 3)).toBe(false);
    expect(isRight(2, 3, 3)).toBe(false);
    expect(isRight(1, 2, 3)).toBe(false);
    expect(isRight(5, 4, 3)).toBe(true);
  });
});
