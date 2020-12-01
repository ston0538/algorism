describe("소수찾기", () => {
  const numbers = "17";
  function stringToNumbers(numbers) {
    const transferArray = numbers.split("");
    const result = transferArray.map((item) => {
      return Number(item);
    });
    return result;
  }
  function isPrime(nums) {
    const numsFilter = nums.filter((num) => {
      if (num > 2) {
        return num % 2 !== 0;
      }
    });
    return numsFilter;
  }
  function solutions(numbers) {
    const lists = stringToNumbers(numbers).sort();
    const result = [];
    lists.forEach((element, index, array) => {
      console.log(numbers.length);
      result.push(element);
    });
    console.log(result);
    const result2 = isPrime(result).sort((a, b) => a - b);
    // return result2;
  }
  it("", () => {
    expect(solutions(numbers)).toEqual([7, 17, 71]);
    // expect(isPrime([1, 2, 3, 4])).toEqual([1, 2, 3, 5, 7]);
  });
});
