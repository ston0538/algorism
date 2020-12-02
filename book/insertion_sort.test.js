describe("삽입 정렬", () => {
  it("삽입 정렬", () => {
    const lists = [2, 1, 3, 4, 5];
    function insertionSort(nums) {
      for (let i = 1; i < nums.length; i++) {
        // 0번째 값을 비교하기 위한 position
        const position = i;
        // index 1의 값을 tempValue에 저장
        // 패스스루가 끝나면 2의 값을 temapValue에 저장
        const tempValue = nums[i];
        while (position > 0 && tempValue < nums[position - 1]) {
          // index 0을 오른쪽으로 쉬프트 한다.
          nums[position] = nums[position - 1];
          nums[position - 1] = tempValue;
        }
      }
      console.log(nums);
      return nums;
    }
    expect(insertionSort(lists)).toEqual([1, 2, 3, 4, 5]);
  });
  it("intersection", () => {
    const lists1 = [2, 1, 3, 5, 6];
    const lists2 = [10, 11, 13, 5, 6];
    function intersection(nums1, nums2) {
      nums1.forEach((element) => {
        if (nums2.includes(element)) {
          console.log(element);
        }
      });
    }
    intersection(lists1, lists2);
  });
});
