import countHours from "./index";

describe("day02 challenge", () => {
  test("return type", () => {
    const extraHours = countHours(2022, []);
    expect(Number.isNaN(extraHours)).toBeFalsy();
  });
  test("Test: countHours(2023, ['01/06', '04/01', '12/25'])", () => {
    const extraHours = countHours(2023, ["01/06", "04/01", "12/25"]);
    expect(extraHours).toEqual(4);
  });
  test("Test: countHours(2022, ['01/06', '04/01', '12/25'])", () => {
    const extraHours = countHours(2022, ["01/06", "04/01", "12/25"]);
    expect(extraHours).toEqual(4);
  });
  test("Test: countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])", () => {
    const extraHours = countHours(1985, [
      "01/01",
      "01/06",
      "02/02",
      "02/17",
      "02/28",
      "06/03",
      "12/06",
      "12/25",
    ]);
    expect(extraHours).toEqual(10);
  });
  test("Test: countHours(2000, ['01/01'])", () => {
    const extraHours = countHours(2000, ["01/01"]);
    expect(extraHours).toEqual(0);
  });
});
