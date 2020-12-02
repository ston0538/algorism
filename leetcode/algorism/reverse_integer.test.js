const { range } = require("../../functions");

describe("Reverse Integer", () => {
  it("two pointer", () => {
    function reverse(x) {
      const limit = 2147483647;
      const changeString = String(x);
      const sign = Math.sign(changeString);
      const lists = [];
      if (sign === -1) {
        for (let i = 1; i < changeString.length; i++) {
          lists.push(changeString[i]);
        }
      } else {
        for (let i = 0; i < changeString.length; i++) {
          lists.push(changeString[i]);
        }
      }
      const result = Number(lists.reverse().join(""));
      if (result > limit) {
        return 0;
      }
      if (sign === -1) {
        return -result;
      } else {
        return result;
      }
    }
    expect(reverse(1534236469)).toEqual(9646324351);
  });
  it("메르센 소수", () => {
    function isPrime(num) {
      const lists = range(2, num);
      console.log(lists);
      if (num < 2) {
        return false;
      }
      if (num === 2) {
        return true;
      }
      for (const item of lists) {
        if (num % item === 0) {
          return false;
        }
        return true;
      }
    }
    function mersennePrime(num) {
      const result = [];
      for (let i = 2; i < 32; i++) {
        const pow = Math.pow(2, i) - 1;
        result.push(pow);
      }
      return result.includes(num);
    }
    expect(mersennePrime(7)).toEqual(true);
  });
});
