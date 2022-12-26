import getMaxGifts from "./index";

describe("day05 challenge", () => {
  test("return type", () => {
    const maxGifts = getMaxGifts([12, 3, 11, 5, 7], 20, 3);
    expect(Number.isNaN(maxGifts)).toBeFalsy();
  });
  test("Test: getMaxGifts([12, 3, 11, 5, 7], 20, 3)", () => {
    const maxGifts = getMaxGifts([12, 3, 11, 5, 7], 20, 3);
    expect(maxGifts).toBe(20);
  });
  test("Test: getMaxGifts([50], 15, 1)", () => {
    const maxGifts = getMaxGifts([50], 15, 1);
    expect(maxGifts).toBe(0);
  });
  test("Test: getMaxGifts([50], 100, 1)", () => {
    const maxGifts = getMaxGifts([50], 100, 1);
    expect(maxGifts).toBe(50);
  });
  test("Test: getMaxGifts([50, 70], 100, 1)", () => {
    const maxGifts = getMaxGifts([50, 70], 100, 1);
    expect(maxGifts).toBe(70);
  });
  test("Test: getMaxGifts([50, 70, 30], 100, 2)", () => {
    const maxGifts = getMaxGifts([50, 70, 30], 100, 2);
    expect(maxGifts).toBe(100);
  });
  test("Test: getMaxGifts([50, 70, 30], 100, 3)", () => {
    const maxGifts = getMaxGifts([50, 70, 30], 100, 3);
    expect(maxGifts).toBe(100);
  });
  test("Test: getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)", () => {
    const maxGifts = getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4);
    expect(maxGifts).toBe(100);
  });
  test("Test: getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)", () => {
    const maxGifts = getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000);
    expect(maxGifts).toBe(115);
  });
});
