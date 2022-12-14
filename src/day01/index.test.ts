import { wrapping } from "./index";

describe("day01 challenge", () => {
  test("expectect array", () => {
    const gifts = [];
    const wrappingGifs = wrapping(gifts);
    expect(Array.isArray(wrappingGifs)).toBeTruthy();
  });
  test("expectect wrapping", () => {
    const gifts = ["cat", "game", "socks"];
    const wrappingGifs = wrapping(gifts);
    const expectectWrap = [
      "*****\n*cat*\n*****",
      "******\n*game*\n******",
      "*******\n*socks*\n*******",
    ];
    expect(wrappingGifs).toEqual(expectectWrap);
  });
  test("expectect wrapping midu", () => {
    const gifts = ["midu"];
    const wrappingGifs = wrapping(gifts);
    const expectectWrap = ["******\n*midu*\n******"];
    expect(wrappingGifs).toEqual(expectectWrap);
  });
  test("expectect wrapping a", () => {
    const gifts = ["a"];
    const wrappingGifs = wrapping(gifts);
    const expectectWrap = ["***\n*a*\n***"];
    expect(wrappingGifs).toEqual(expectectWrap);
  });
  test("expectect wrapping empty", () => {
    const gifts = [];
    const wrappingGifs = wrapping(gifts);
    expect(wrappingGifs.length).toBe(0);
  });
});
