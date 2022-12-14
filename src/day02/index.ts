/**
 * "Given a year and a list of holidays, return the number of hours that are worked on those holidays."
 * 
 * The function is written in TypeScript, which is a superset of JavaScript. TypeScript is a typed
 * language, which means that it has a type system. The type system is used to catch errors at compile
 * time
 * @param {number} year - the year to count hours for
 * @param {string[]} holidays - an array of strings, each string is a date in the format "MM/DD"
 * @returns The number of hours that are worked on holidays.
 */
function countHours(year: number, holidays: string[]) {
  let hours = 0;
  holidays.forEach((holiday) => {
    const day = new Date(holiday + "/" + year);
    const dayOfWeek = day.getDay();
    if (dayOfWeek > 0 && dayOfWeek < 6) {
      hours += 2;
    }
  });
  return hours;
}

export { countHours };
