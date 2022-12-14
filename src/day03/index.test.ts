import { distributeGifts } from "./index";

describe("day03 challenge", () => {
  test("return type", () => {
    const packofGifts = distributeGifts([], []);
    expect(Number.isNaN(packofGifts)).toBeFalsy();
  });
  test("distributeGifts", () => {
    const packOfGifts = ["book", "doll", "ball"];
    const reindeers = ["dasher", "dancer"];
    const numberOfPacks = distributeGifts(packOfGifts, reindeers);
    expect(numberOfPacks).toEqual(2);
  });
  test("Test: distributeGifts(['a', 'b', 'c'], ['d', 'e'])", () => {
    const numberOfPacks = distributeGifts(["a", "b", "c"], ["d", "e"]);
    expect(numberOfPacks).toEqual(1);
  });
  test("Test: it should return 0 if reindeers can't carry any pack: distributeGifts(['videogames', 'console'], ['midu'])", () => {
    const numberOfPacks = distributeGifts(["videogames", "console"], ["midu"]);
    expect(numberOfPacks).toEqual(0);
  });
  test("Test: distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])", () => {
    const numberOfPacks = distributeGifts(
      ["game", "videoconsole", "computer"],
      [
        "midudev",
        "pheralb",
        "codingwithdani",
        "carlosble",
        "blasco",
        "facundocapua",
        "madeval",
        "memxd",
      ]
    );
    expect(numberOfPacks).toEqual(5);
  });
  test("Test: distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])", () => {
    const numberOfPacks = distributeGifts(
      ["music"],
      [
        "midudev",
        "pheralb",
        "codingwithdani",
        "carlosble",
        "blasco",
        "facundocapua",
        "madeval",
        "memxd",
      ]
    );
    expect(numberOfPacks).toEqual(26);
  });
});
