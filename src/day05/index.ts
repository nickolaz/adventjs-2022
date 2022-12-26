function getMaxGifts(
  giftsCities: Array<number>,
  maxGifts: number,
  maxCities: number
) {
  let sum = 0;
  giftsCities = giftsCities.sort((prev: number, next: number) => next - prev);
  for (let i = 0; i <= giftsCities.length; i++) {
    for (let j = i + 1; j <= giftsCities.length; j++) {
      const posibleGifs = giftsCities.slice(i, j);
      console.log("POSIBLE: ", JSON.stringify(posibleGifs));
      if (posibleGifs.length > maxCities) {
        for (let k = 0; k <= posibleGifs.length; k++) {
          for (let q = k + maxCities; q <= posibleGifs.length; q++) {
            let subPosibleGifs = posibleGifs.slice(k, q);
            console.log("SUB POSIBLE: ", JSON.stringify(subPosibleGifs));
            if (subPosibleGifs.length > maxCities) {
              subPosibleGifs = subPosibleGifs.filter(
                (value: number, index: number) =>
                  index != q - maxCities && index + 1 < subPosibleGifs.length
              );
            }
            const posible = posibleGifs.reduce(
              (acc: number, current: number) => {
                const res = acc + current;
                if (res <= maxGifts) {
                  return res;
                }
                return acc;
              },
              0
            );
            if (posible > sum) {
              sum = posible;
            }
          }
        }
      } else {
        const posible = posibleGifs.reduce((acc: number, current: number) => {
          const res = acc + current;
          if (res <= maxGifts) {
            return res;
          }
          return acc;
        }, 0);
        if (posible > sum) {
          sum = posible;
        }
      }
    }
  }
  return sum;
}

export default getMaxGifts;
