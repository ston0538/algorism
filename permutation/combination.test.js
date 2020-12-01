describe("combination", () => {
  function combination(elements) {
    if (elements.length === 0) return [[]];
    const firstEl = elements[0];
    const rest = elements.slice(1, Infinity);
    const withOutFirst = combination(rest);
    const withFirst = [];
    withOutFirst.forEach((item) => {
      const result = [...item, firstEl];
      withFirst.push(result);
    });
    return [...withOutFirst, ...withFirst];
  }
  it(" ", () => {});
  expect(combination([1, 7])).toEqual("hi");
});
