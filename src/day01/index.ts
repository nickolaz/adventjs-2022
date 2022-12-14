/**
 * The wrapping function takes an array of strings and returns an array of strings
 * @param {string[]} gifts - string[] - an array of strings
 * @returns an array of strings.
 */
function wrapping(gifts: string[]) {
  const wrap: string = "*";
  return gifts.map((gif) => {
    const wrapLength: string = wrap.repeat(gif.length + 2);
    return wrapLength + "\n*" + gif + "*\n" + wrapLength;
  });
}

export { wrapping };
