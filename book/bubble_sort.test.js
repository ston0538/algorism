// const { bubleSort } = require("../functions");

describe("버블 정렬", () => {
  it("버블 정렬 만들기1", () => {
    const array = [4, 2, 7, 1, 3];
    function bubleSort(arr) {
      // 첫번째 for는 sorted = false 처럼 스왑을 거는 것 처럼
      // 원소 수만큼 루프를 돌면 끝낸다
      for (let i = 0; i < array.length - 1; i++) {
        // 두번째 for는 실질적으로 값들을 비교한다.
        for (let j = 0; j < array.length - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
      console.log(arr);
      return arr;
    }
    expect(bubleSort(array)).toEqual([1, 2, 3, 4, 7]);
  });
  it("버블 정렬 만들기2", () => {
    const array = [4, 2, 7, 1, 3];
    function bubleSort2(nums) {
      let sorted = false;
      while (sorted === false) {
        sorted = true;
        nums.forEach((item, index, array) => {
          if (item > array[index + 1]) {
            array[index] = array[index + 1];
            array[index + 1] = item;
            sorted = false;
          }
        });
      }
      return array;
    }
    expect(bubleSort2(array)).toEqual([1, 2, 3, 4, 7]);
  });
  it("배열의 중복 검사(이차 문제1)", () => {
    const array = [4, 2, 7, 1, 5, 1];
    function hasDuplicateValue(array) {
      // 첫번째 for는 원소를 순회한다.
      for (let i = 0; i < array.length; i++) {
        // 두번째 원소는 비교하기 위해 원소를 순회한다.
        // array[0] , array[0], array[1], array[2], array[3], array[4], array[5]
        // 4 | 4,2,7,1,5,1,

        // array[1] , array[0], array[1], array[2], array[3], array[4], array[5]
        // 2 | 4,2,7,1,5,1,

        // array[2] , array[0], array[1], array[2], array[3], array[4], array[5]
        // 7 | 4,2,7,1,5,1,

        // array[3] , array[0], array[1], array[2], array[3], array[4], array[5]
        // 1 | 4,2,7,1,5,1,

        // array[4] , array[0], array[1], array[2], array[3], array[4], array[5]
        // 5 | 4,2,7,1,5,1,

        // array[5] , array[0], array[1], array[2], array[3], array[4], array[5]
        // 1 | 4,2,7,1,5,1,
        // i !== j는 자기자신끼리 비교하는 것이므로 빼고 array[i] === array[j] 를 통해 같은 값을 찾는다. ㅔ
        for (let j = i + 1; j < array.length; j++) {
          if (array[i] === array[j]) {
            return true;
          }
        }
      }
      return false;
    }
    expect(hasDuplicateValue(array)).toBe(true);
  });
  it("배열의 중복 검사(이차 문제2)", () => {
    const array = [4, 2, 7, 1, 5, 1];
    function hasDuplicateValue(array) {
      let exist = [];
      for (let i = 0; i < array.length; i++) {
        if (exist[array[i]] === undefined) {
          exist[array[i]] = 1;
        } else {
          return true;
        }
      }
      return false;
    }
    expect(hasDuplicateValue(array)).toBe(true);
  });
  it("배열의 중복 검사(이차 문제3)", () => {
    const array = [4, 2, 7, 1, 5, 1];
    function hasDuplicateValue(array) {
      let exist = [];
      let result = false;
      array.forEach((ele, index, array) => {
        if (exist[ele] === undefined) {
          exist[ele] = 1;
        } else {
          result = true;
        }
      });
      return result;
    }
    expect(hasDuplicateValue(array)).toBe(true);
  });
});
