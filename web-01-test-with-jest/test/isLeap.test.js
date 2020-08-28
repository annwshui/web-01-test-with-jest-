const isLeap = require("../isLeap.js");

describe("isLeap.js", function () {
  test("isLeap()", () => {
    expect(isLeap(1900)).toBe(false);
    expect(isLeap(2000)).toBe(true);
    expect(isLeap(2020)).toBe(true);
    expect(isLeap(2021)).toBe(false);
    expect(isLeap(2024)).toBe(true);
  });
});
