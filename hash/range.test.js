function solutaion(a, b) {
  function range(from, to) {
    let result = [];
    let n = from;
    if (from > to) {
      let n = to;
      while (n <= from) {
        result.push(n);
        n += 1;
      }
    }
    while (n <= to) {
      result.push(n);
      n += 1;
    }
    return result;
  }
  const array = range(a, b);
  const result = array.reduce((acc, currentValue) => acc + currentValue, 0);
  return result;
}

test("range test", () => {
  expect(solutaion(5, 3)).toBe(12);
});
