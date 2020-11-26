describe("factorial", () => {
  // function fatorial(n) {
  //   var result = 1;
  //   for (var i = n; i > 0; i--) {
  //     result = result * i;
  //   }

  //   return result;
  // }
  function factorial(n, acc = 1) {
    if (n === 1) {
      return acc;
    } else {
      return factorial(n - 1, acc * n);
    }
  }
  it("", () => {
    expect(factorial(5)).toEqual(120);
  });
});
