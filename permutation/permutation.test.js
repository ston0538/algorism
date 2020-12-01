describe("Name of the group", () => {
  const lists = ["a", "b", "c"];
  // const lists = ["b", "c"];
  function permutate(nums) {
    if (nums.length === 0) return [[]];
    const first = nums[0];
    // console.log(first);
    const tail = nums.slice(1, Infinity);
    const withOutFirstPerm = permutate(tail);
    const result = [];
    withOutFirstPerm.forEach((item, index) => {
      for (let i = 0; i <= item.length; i++) {
        const permWithFirst = [...item.slice(0, i), first, ...item.slice(i)];
        result.push(permWithFirst);
      }
    });
    return result;
  }
  function permutate(nums) {
    if (nums.length === 0) return [[]];
    const first = nums[0];
    const tail = nums.slice(1, Infinity);
    const withOutFirstPerm = permutate(tail);
    const result = [];
    withOutFirstPerm.forEach((item) => {
      for (let i = 0; i <= item.length; i++) {
        console.log("item", item);
        console.log("first", first);
        // console.log(i);
        const permWithFirst = [...item.slice(0, i), first, ...item.slice(i)];
        result.push(permWithFirst);
      }
    });
    return result;
  }
  it("", () => {
    expect(permutate([1, 7])).toBe(5);
    // expect(permutate(["b", "c"])).toBe(6);
  });

  it("", () => {
    function test(item) {
      if (item.length === 0) return [[]];
      const first = item[0];
      const rest = item.slice(1, Infinity);
      // withoutFirst 는 결국 result로 대입된다.
      const withoutFirst = test(rest);
      //

      const result = [];
      result.push(first);
      // console.log("first", first);
      // console.log("without", withoutFirst);
      // result.push(first);
      // withoutFirst.forEach((item) => {
      //   for (let i = 0; i <= item.length; i++) {
      //     const lists = [...item.slice(0, i), ...first, ...item.slice(i)];
      //     console.log("lists", lists);
      //     result.push(lists);
      //   }
      // });
      return result;
    }
    // expect(test([1, 7])).toEqual("hi");
    // expect(test(["b", "c"])).toEqual("hi");
    // expect(test(["c"])).toEqual("hi");
  });
});
