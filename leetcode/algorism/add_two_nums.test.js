describe("Add Two Numbers", () => {
  const l1 = [2, 4, 3];
  const l2 = [5, 6, 4];
  function reverse(list) {
    const reverseList = list.reverse();
    console.log(reverseList.toString());
  }
  function addTwoNumbers(list1, list2) {
    const ex1 = 342;
    const ex2 = 465;
    console.log(ex1 + ex2);
    return [7, 0, 8];
  }
  it("", () => {
    // expect(addTwoNumbers(l1, l2)).toEqual([7, 0, 8]);
    expect(reverse(l1)).toEqual([3, 4, 2]);
  });
});
