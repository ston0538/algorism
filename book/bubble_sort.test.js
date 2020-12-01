// const { bubleSort } = require("../functions");

describe("버블 정렬", () => {
  it("버블 정렬 만들기1", () => {
    const array = [4, 2, 7, 1, 3];
    function bubleSort(arr) {
      for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
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
      // console.log(array.length);
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
          if (i !== j && array[i] == array[j]) {
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
