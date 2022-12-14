/**
 * It takes an array of gifts and an array of reindeers and returns the maximum number of gifts that
 * can be distributed to each reindeer
 * @param {string[]} packOfGifts - an array of strings, each with the name of a gift
 * @param {string[]} reindeers - ["Vixen", "Dasher", "Dancer", "Prancer", "Comet", "Cupid", "Donner",
 * "Blitzen", "Rudolph"]
 * @returns the number of gifts that can be distributed to the reindeers.
 */
function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  let giftWeight = 0;
  packOfGifts.forEach((gif) => {
    giftWeight += gif.length;
  });
  let reindeersCapatity = 0;
  reindeers.forEach((reinder) => {
    reindeersCapatity += reinder.length * 2;
  });
  if (giftWeight === 0) {
    return 0;
  } else {
    return Math.floor(reindeersCapatity / giftWeight);
  }
}

export { distributeGifts };
