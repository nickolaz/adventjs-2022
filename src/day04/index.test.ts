import { fitsInOneBox } from "./index";

describe("day04 challenge", () => {
  test("return type", () => {
    const fit = fitsInOneBox([]);
    expect(fit).toBeTruthy();
  });
  test(`Test: fitsInOneBox([
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
  ])`, () => {
    const fit = fitsInOneBox([
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 },
    ]);
    expect(fit).toBeFalsy();
  });
  test(`Test: fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ])
  `, () => {
    const fit = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ]);
    expect(fit).toBeTruthy();
  });
  test(`Test: fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ])`, () => {
    const fit = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 },
    ]);
    expect(fit).toBeFalsy();
  });
  test(`Test: fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2}
  ])`, () => {
    const fit = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 },
    ]);
    expect(fit).toBeFalsy();
  });
  test(`Test: fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ])`, () => {
    const fit = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 },
    ]);
    expect(fit).toBeTruthy();
  });
});
