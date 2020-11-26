describe("소수찾기", () => {
  const numbers = "17235";
  function stringToNumbers(numbers) {
    const transferArray = numbers.split("");
    const result = transferArray.map((item) => {
      return Number(item);
    });
    return result;
  }
  function solutions(numbers) {
    const lists = stringToNumbers(numbers).sort();
    const result = [];
    for (let i = 0; i < lists.length; i++) {
      for (let j = 0; j < lists.length; j++) {
        if (i === j) continue;
        result.push(Number(lists[i] + "" + lists[j]));
      }
    }
    // const result2 = result.filter((item) => item % 2 === 1);
    console.log(result);
    return lists;
  }
  it("", () => {
    expect(solutions(numbers)).toEqual([1, 2, 3, 5, 7]);
  });
});
