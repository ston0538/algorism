describe("린터", () => {
  function linter() {
    const stack = [];
    const all = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
    const openList = Object.keys(all);
    const closeList = Object.values(all);
    const opening_brace = (brace) => {
      const braceToArray = brace.replace(/(\s*)/g, "").split("");
      braceToArray.forEach((item) => {
        const push = openList.includes(item);
        if (push) {
          stack.push(item);
        } else if (stack[stack.length - 1]) {
          opening_brace_of(item);
        }
      });

      console.log("stack", stack);
    };
    const opening_brace_of = (item) => {
      const result = stack[stack.length - 1];
      const result2 = all[result];
      if (result2 === item) {
        stack.pop();
      }
    };
    const closing_brace = (char) => {};
    return Object.freeze({
      opening_brace,
      closing_brace,
    });
  }
  it("자바스크립트 린터", () => {
    const result = linter();
    result.opening_brace(`(let x = { y: [1,2,3]})`);
  });
});
