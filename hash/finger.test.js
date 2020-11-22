function solution(numbers, hand) {
  let resultArray = [];
  numbers.forEach((element) => {
    if (element % 3 === 0) {
      resultArray.push("R");
    }
    handNumbers(element, hand, resultArray);
  });
  console.log(resultArray);
  return resultArray;
}
function handNumbers(element, hand, array) {
  switch (element) {
    case 1:
      array.push("L");
      break;
    case 4:
      array.push("L");
      break;
    case 7:
      array.push("L");
      break;
    default:
      break;
  }
  if (hand === "right") {
    switch (element) {
      case 2:
        array.push("R");
        break;
      case 5:
        array.push("R");
        break;
      case 8:
        array.push("R");
        break;
      case 0:
        array.push("R");
        break;

      default:
        break;
    }
  }
  if (hand === "left") {
    switch (element) {
      case 2:
        array.push("L");
        break;
      case 5:
        array.push("L");
        break;
      case 8:
        array.push("L");
        break;
      case 0:
        array.push("L");
        break;

      default:
        break;
    }
  }
}
test("should ", () => {
  expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")).toBe(
    "LRLLLRLLRRL"
  );
});
