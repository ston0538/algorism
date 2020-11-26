describe("k번째수", () => {
  it("k번째수", () => {
    const array = [1, 5, 2, 6, 3, 7];
    const find = [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ];
    function solution(array, commands) {
      const resultArray = [];
      commands.forEach((element) => {
        const [start, end, index] = element;
        resultArray.push(arraySlice(array, start, end, index));
      });
      return resultArray;
    }
    function arraySlice(arr, start, end, index) {
      const result = arr.slice(start - 1, end);
      const resultSorted = result.sort((a, b) => a - b);
      return resultSorted[index - 1];
    }
    expect(solution(array, find)).toEqual([5, 6, 3]);
  });
});
