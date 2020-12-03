import * as R from "ramda";

describe("인코더, 디코더", () => {
  it("인코더", () => {
    function encorder(string) {
      let first = string[0];
      let result = "";
      let count = 0;
      let value;
      for (let i = 0; i < string.length; i++) {
        value = string[i];
        if (first === value) {
          count += 1;
        } else {
          result += count + "x" + first;
          count = 1;
          first = value;
        }
      }
      result += count + "x" + value;
      if (string.length < result.length) {
        return string;
      }
      if (string === result) {
        return string;
      }
      return result;
    }

    // expect(encorder("AAAABBBCCCCCC")).toEqual("4xA3xB6xC");
    // expect(encorder("ABC")).toEqual("ABC");
    // expect(encorder("5xA3xB6xC")).toEqual("5xA3xB6xC");
    // expect(encorder("11111111111111AABB")).toEqual("14x12xA2xB");
  });
  it("인코더 2", () => {
    function stringToArray(strings) {
      const newString = [];
      for (let i = 0; i < strings.length; i++) {
        newString.push(strings[i]);
      }
      return newString;
    }
    function mergeString(obj) {
      let result = "";
      for (const [key, value] of Object.entries(obj)) {
        result += `${value}` + "x" + `${key}`;
      }
      return result;
    }
    function encorder(string) {
      const newString = stringToArray(string);
      const transferObj = newString.reduce((acc, currentValue) => {
        acc[currentValue] =
          acc[currentValue] === undefined ? 1 : acc[currentValue] + 1;
        return acc;
      }, {});
      const result = mergeString(transferObj);

      if (string.length < result.length) {
        return string;
      }
      if (string === result) {
        return string;
      }
      return result;
    }
    expect(encorder("AAAABBBCCCCCC")).toEqual("4xA3xB6xC");
    expect(encorder("ABC")).toEqual("ABC");
    expect(encorder("5xA3xB6xC")).toEqual("5xA3xB6xC");
    expect(encorder("11111111111111AABB")).toEqual("14x12xA2xB");
  });
});
