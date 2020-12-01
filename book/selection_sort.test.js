describe("선택 정렬", () => {
  const lists = [4, 2, 7, 1, 3];
  function selection_sort(nums) {
    for (let i = 0; i < nums.length; i++) {
      let lowerIndex = i;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[lowerIndex]) {
          lowerIndex = j;
        }
      }
      if (lowerIndex !== i) {
        let temp = nums[i];
        nums[i] = nums[lowerIndex];
        nums[lowerIndex] = temp;
      }
    }
    console.log(nums);
    return nums;
  }
  it("should ", () => {
    selection_sort(lists);
  });
});
