import R from "ramda";
import { binaraySearch } from "../functions";
describe("정렬된 배열", () => {
  it("선형 검색 forEach", () => {
    const array = [3, 17, 75, 80, 202];
    function linear_search(arr, value) {
      let result;
      let i = 0;
      arr.forEach((item, index) => {
        console.log(i++);
        if (item === value) {
          result = `${item}은 ${index}에 위치하고 있습니다.`;
        } else if (item > value) {
        }
      });
      return result;
    }
    // expect(linear_search(array, 18)).toBe(17);
  });
  it("선형 검색 find", () => {
    const array = [3, 17, 75, 80, 202];
    function linear_search(arr, value) {
      const findValue = (item) => item === value;
      const result = arr.find(findValue);
      if (result !== undefined) {
        return `${result}을 찾았습니다.`;
      } else {
        return "값을 찾을 수 없습니다";
      }
    }
    expect(linear_search(array, 3)).toBe("3을 찾았습니다.");
  });
  it("선형 검색 some", () => {
    const array = [3, 17, 75, 80, 202];
    function linear_search(arr, value) {
      let returnText;
      const findValue = (item, index) => {
        if (item === value) {
          returnText = `${item}을 ${index}에서 찾았습니다.`;
          return true;
        }
      };

      const result = arr.some(findValue);
      if (result === true) {
        return returnText;
      } else {
        return "값을 찾을 수 없습니다";
      }
    }
    expect(linear_search(array, 202)).toBe("202을 4에서 찾았습니다.");
  });
  it("2진검색(binary search)", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(binaraySearch(array, 11)).toBe(-1);
  });
  it("2진검색(binary search) 100개의 값은 7단계", () => {
    const array = R.range(0, 100);
    expect(binaraySearch(array, 4)).toBe(4);
  });
});
