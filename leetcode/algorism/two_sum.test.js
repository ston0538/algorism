describe("Two Sum", () => {
  it("이중 for문", () => {
    function twoSum(nums, target) {
      const result = [];
      for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
            result.push(i);
            result.push(j);
          }
        }
      }
      return result;
    }
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
  it("forEach", () => {
    function twoSum(nums, target) {
      const obj = {};
      let result;
      nums.forEach((item, index, array) => {
        if (obj[item] !== undefined) {
          result = [obj[item], index];
        } else {
          obj[target - item] = index;
          console.log(obj);
        }
      });
      return result;
    }
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  it("객체", () => {
    function twoSum(nums, target) {
      const obj = {};
      for (let index = 0; index < nums.length; index++) {
        const currentNumber = nums[index];
        const neededValue = target - currentNumber;
        const index2 = obj[neededValue];
        if (index2 !== undefined) {
          return [index2, index];
        } else {
          obj[currentNumber] = index;
        }
      }
    }
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
});
