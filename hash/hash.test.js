function solution(parts, comples) {
  const result = parts.reduce((acc, currentValue) => {
    acc[currentValue] =
      acc[currentValue] === undefined ? 1 : acc[currentValue] + 1;

    return acc;
  }, {});
  comples.forEach((comple) => {
    if (result[comple]) {
      result[comple] = result[comple] - 1;
    }
    if (result[comple] === 0) {
      delete result[comple];
    }
  });
  return Object.keys(result)[0];
}

test("완주하지 못한 선수1", () => {
  const participant = ["leo", "kiki", "eden"];
  const completion = ["eden", "kiki"];
  expect(solution(participant, completion)).toBe("leo");
  // solution(participant, completion);
});
test("완주하지 못한 선수2", () => {
  const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
  const completion = ["josipa", "filipa", "marina", "nikola"];
  expect(solution(participant, completion)).toBe("vinko");
});
test("완주하지 못한 선수3", () => {
  const participant = ["mislav", "stanko", "mislav", "ana"];
  const completion = ["stanko", "ana", "mislav"];
  expect(solution(participant, completion)).toBe("mislav");
});
