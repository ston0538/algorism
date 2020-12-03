describe("Array", () => {
  it("처음 짠 코드", () => {
    const lists = [2, 3, 4, 5, 18, 17, 6];
    function recur(nums, acc = []) {
      if (nums.length === 1) return acc;
      const first = nums[0];
      const last = nums[nums.length - 1];

      const horizontal = last[0] - first[0];
      const vertical = first[1] > last[1] ? last[1] : first[1];
      const width = horizontal * vertical;
      acc.push(width);
      return recur(nums.slice(1, Infinity), acc);
    }
    function arrFunc(height) {
      const newLists = [];
      height.forEach((item, index) => {
        newLists.push([index, item]);
      });
      const sort = recur(newLists).sort((a, b) => a - b);
      const result = sort[sort.length - 1];
      return result;
    }

    expect(arrFunc(lists)).toEqual(17);
  });
  it("두번째 짠 코드", () => {
    const lists = [2, 3, 4, 5, 18, 17, 6];
    function recur(nums, acc = []) {
      if (nums.length === 1) return acc;
      const first = nums[0];
      let last = nums[nums.length - 1];
      if (first[1] > last[1]) {
        nums.pop();
      } else {
        nums.shift();
      }
      const horizontal = last[0] - first[0];
      const vertical = first[1] > last[1] ? last[1] : first[1];
      const width = horizontal * vertical;
      acc.push(width);
      return recur(nums, acc);
    }
    function arrFunc(height) {
      const newLists = [];
      height.forEach((item, index) => {
        newLists.push([index, item]);
      });
      const sort = recur(newLists).sort((a, b) => a - b);
      const result = sort[sort.length - 1];
      return result;
    }
    expect(arrFunc(lists)).toEqual(17);
  });
});
// 용기를 담을 수 있는 경우의 수
// (0,1) (8,7) = 8 x 1;

// (1,8) (8,7) = 7 x 7;

// (2,6) (8,7) = 6 x 6;

// (3,2) (8,7) = 5 x 2;

// (4,5) (8,7) = 4 x 5;

// (5,4) (8,7) = 3 x 4;

// (6,8) (8,7) = 2 x 7;

// (7,3) (8,7) = 1 x 3;

//  1x8
//  7x7
//  3x6
//  8x5
//  6x4
//  2x3
//  5x2
//  4x1

// 규칙
// 가로는 마지막 index부터 시작해서 하나씩 줄어든다.
// 세로는 작은쪽 값이 채택 된다.

// 문제
// 1. 마지막 값을 고정하고 계산하면 안된다. 앞 원소에 마지막 값보다 큰 높이가 있을 수 있다.
//     -> 마지막 값을 고정한 이유는 index가 멀어질수록 가로값이 크기 때문에 넓이가 제일 넓을 가능성이 있다.
// 2. 큰 높이가 발견되면 넓이를 구할 높이가 변경 되므로 last를 바꿔줘야 한다.
//     -> 처음 짠 코드는 조건을 무시했다.

// const lists = [2, 3, 4, 5, 18, 17, 6];
// (0,2) (6,6) = 6 2
// (1,3) (6,6) 5 3
// (2,4) (6,6) 4 4
// (3,5)  (6,6) 3 5
// (4,18) (6,6)  2 6
// (5,17) (6,6) 1 6

// (0,2) (4,18) = 6 2
// (1,3) (6,6) 5 3
// (2,4) (6,6) 4 4
// (3,5)  (6,6) 3 5
// (4,18) (6,6)  2 6
// (5,17) (6,6) 1 6
