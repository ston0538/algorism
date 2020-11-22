function solution(clothes) {
  const result = clothes.reduce((acc, currentValue) => {
    acc[currentValue[1]] =
      acc[currentValue[1]] === undefined ? 1 : acc[currentValue[1]] + 1;
    return acc;
  }, {});
  const result2 = Object.values(result);
  const result3 = result2.reduce((acc, currentValue) => {
    acc = (currentValue + 1) * acc;
    return acc;
  }, 1);
  return result3 - 1;
}
function solutionRecursive(clothes) {
  const result = clothes.reduce((acc, currentValue) => {
    acc[currentValue[1]] =
      acc[currentValue[1]] === undefined ? 1 : acc[currentValue[1]] + 1;
    return acc;
  }, {});
  const result2 = Object.values(result);
  function sum(array) {
    if (array.length === 0) {
      return 1;
    }
    return (array[0] + 1) * sum(array.slice(1, Infinity));
  }
  const result3 = sum(result2) - 1;
  return result3;
}
function solutionTail(clothes) {
  const result = clothes.reduce((acc, currentValue) => {
    acc[currentValue[1]] =
      acc[currentValue[1]] === undefined ? 1 : acc[currentValue[1]] + 1;
    return acc;
  }, {});
  const result2 = Object.values(result);
  function sum(array, acc = 1) {
    if (array.length === 0) {
      return acc;
    }
    return sum(array.slice(1, Infinity), acc * (array[0] + 1));
  }
  const result3 = sum(result2) - 1;
  return result3;
}
test("의상1", () => {
  const clothes = [
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ];
  expect(solutionTail(clothes)).toEqual(5);
});

test("의상2", () => {
  const clothes = [
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ];
  expect(solution(clothes)).toEqual(3);
});
