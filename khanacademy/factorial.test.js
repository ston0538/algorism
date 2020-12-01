describe("factorial", () => {
  // function fatorial(n) {
  //   var result = 1;
  //   for (var i = n; i > 0; i--) {
  //     result = result * i;
  //   }

  //   return result;
  // }
  function tailFactorial(n, acc = 1) {
    if (n === 1) {
      return acc;
    } else {
      return tailFactorial(n - 1, acc * n);
    }
  }
  function factorial(n) {
    if (n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  it("", () => {
    expect(tailFactorial(5)).toEqual(120);
    expect(factorial(5)).toEqual(120);
  });
});
