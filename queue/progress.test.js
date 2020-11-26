describe("큐", () => {
  // const progress = [93, 30, 55];
  // const speeds = [1, 30, 5];
  const progress = [95, 90, 99, 99, 80, 99];
  const speeds = [1, 1, 1, 1, 1, 1];
  function queue() {
    let count = 0;
    const list = [];
    const queuePush = (item) => {
      list.push(item);
      return list;
    };
    const queuePop = () => {
      count++;
      list.shift();
      return list;
    };
    return Object.freeze({
      queuePush,
      queuePop,
      list,
    });
  }
  function input(progress, speeds) {
    const result = queue();
    progress.forEach((item, index) => {
      const day = Math.ceil((100 - item) / speeds[index]);
      result.queuePush(day);
    });
    return result;
  }

  function solution(progress, speeds) {
    const result = input(progress, speeds);
    const answer = [];
    let count = 0;
    let max = 0;
    result.list.forEach((item, index, array) => {
      if (array[0] > item) {
        result.queuePop();
        count++;
        count = 0;
      } else {
        result.queuePop();
        count++;
        count = 0;
      }
    });
    console.log(result.list);
    answer.push(count);
    console.log("count", count);
    console.log(answer);
  }
  it("기능 개발", () => {
    expect(solution(progress, speeds)).toEqual([2, 1]);
  });
});
