describe("reverse string", () => {
  it("recursion", () => {
    function reverseString(string, result = []) {
      if (string.length === 0) {
        return result;
      }
      const lastIndex = string.length - 1;
      result.push(string[lastIndex]);
      string.pop();
      return reverseString(string, result);
    }
    expect(reverseString(["H", "a", "n", "n", "a", "h"])).toEqual([
      "h",
      "a",
      "n",
      "n",
      "a",
      "H",
    ]);
  });
  it("two pointer", () => {
    function reverseString(string) {
      // make two pointer
      let start = 0;
      let end = string.length - 1;
      // swap
      while (start < end) {
        const temp = string[start];
        string[start] = string[end];
        string[end] = temp;
        start++;
        end--;
      }
      return string;
    }
    expect(reverseString(["H", "a", "n", "n", "a", "h"])).toEqual([
      "h",
      "a",
      "n",
      "n",
      "a",
      "H",
    ]);
  });
});
