describe("정렬된 배열", () => {
  it("선형 검색 forEach", () => {
    const array = [3, 17, 75, 80, 202];
    function linear_search(arr, value) {
      let i = 0;
      for (let index = 0; index < arr.length; index++) {
        if (arr[index] === value) {
          return true;
        } else if (arr[index] > value) {
          return false;
        }
      }
    }
    expect(linear_search(array, 17)).toBe(true);
  });
  it("선형 검색 find", () => {
    const array = [3, 17, 75, 80, 202];
    function linear_search(arr, value) {
      const findValue = (item) => item === value;
      const result = arr.find(findValue);
      return result;
    }
    expect(linear_search(array, 3)).toBe(3);
  });
  it("선형 검색 some", () => {
    const array = [3, 17, 75, 80, 202];
    function linear_search(arr, value) {
      const result = arr.some((item) => item === value);
      return result;
    }
    expect(linear_search(array, 202)).toBe(true);
  });
  it("2진검색(binary search)", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // expect(binaraySearch(array, 11)).toBe(-1);
  });
  it("2진검색(binary search) 100개의 값은 7단계", () => {
    function range(from, to) {
      const result = [];
      let n = from;
      while (n < to) {
        result.push(n);
        n += 1;
      }
      return result;
    }
    function binarySearch(lists, value) {
      // start, end 구하기
      console.log(lists);
      let lowerBound = 0;
      let upperBound = lists.length - 1;
      while (lowerBound <= upperBound) {
        let middleBound = Math.ceil((lowerBound + upperBound) / 2);
        let middleValue = lists[middleBound];
        if (value === lists[middleBound]) {
          return middleBound;
        }
        if (value > lists[middleBound]) {
          lowerBound = middleBound + 1;
        } else if (value < lists[middleBound]) {
          upperBound = middleBound - 1;
        }
      }
      return false;
      // 중간값 구하기
    }
    const array = range(1, 10);
    expect(binarySearch(array, 4)).toBe(3);
  });
});
