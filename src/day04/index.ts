interface box {
  l: number;
  w: number;
  h: number;
}

function fitsInOneBox(boxes: Array<box>) {
  function compareBoxes(prevBox: box, nextBox: box) {
    return prevBox.l - nextBox.l;
  }
  const orderBoxes = boxes.sort(compareBoxes);
  let fit: boolean = true;
  function fitInBox(prevBox: box, nextBox: box) {
    const fitInL = prevBox.l < nextBox.l;
    const fitInW = prevBox.w < nextBox.w;
    const fitInH = prevBox.h < nextBox.h;
    return fitInL && fitInW && fitInH;
  }
  orderBoxes.forEach((value, index, arr) => {
    const nextValue = arr[index + 1];
    if (nextValue && fit) {
      fit = fitInBox(value, arr[index + 1]);
    }
  });
  return fit;
}

export default fitsInOneBox;
