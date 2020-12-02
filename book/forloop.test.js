describe("for loop", () => {
  it("length - 1까지 순회하는 이유", () => {
    const lists = [2, 1, 4, 3, 5];
    function bubbleSort(nums) {
      for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
          if (nums[j] > nums[j + 1]) {
            const temp = nums[j + 1];
            nums[j + 1] = nums[j];
            nums[j] = temp;
          }
        }
      }
      //https://www.notion.so/khk0613/for-loop-cfaa401b0fa7488e898ed83e539a2554
      // console.log(nums);
      return nums;
    }
    expect(bubbleSort(lists)).toEqual([1, 2, 3, 4, 5]);
  });
  it("선택 정렬", () => {
    const lists = [2, 1, 4, 3, 5];
    function selectionSort(nums) {
      for (let i = 0; i < nums.length; i++) {
        const lowerIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[lowerIndex] > nums[j]) {
            lowerIndex = nums[j];
          }
        }
        if (lowerIndex !== i) {
          const temp = nums[lowerIndex];
          nums[lowerIndex] = nums[i];
          nums[i] = temp;
        }
      }
      // console.log(nums);
      return nums;
    }
    expect(selectionSort(lists)).toEqual([1, 2, 3, 4, 5]);
  });
});
