export function binaraySearch(arr, value) {
  // 상한선, 하한선 값 구하기
  let lowerBound = 0;
  let upperBound = arr.length - 1;
  // 상한선과 하한선 사이의 가운데 값을 계속해서 확인하는 루프 구현
  while (lowerBound <= upperBound) {
    // console.log("try");
    let midBound = Math.floor((upperBound + lowerBound) / 2); // 5
    let midBoundValue = arr[midBound];
    // 같다면 바로 return
    if (value === midBoundValue) {
      return midBoundValue;
    }
    // 찾고자 하는 값이 중간값보다 더 크다면 오른쪽으로 기준을 옮겨야 된다.
    // 오른쪽으로 기준을 옮기려면 최소값은 중간값의 오른쪽 한칸 이동
    // 왼쪽으로 옮기려면 최소값은 어차피 0이므로 최고값에서 하나를 뺸다.
    if (value > midBoundValue) {
      lowerBound = midBound + 1;
    } else upperBound = midBound - 1;
  }
  return -1;
}

export function bubleSort(arr) {
  // 배열의 정렬 여부
  let sorted = false;
  // 각 while 루프는 새로운 패스스루를 뜻한다.
  while (sorted === false) {
    sorted = true;
    arr.forEach((element, index, array) => {
      if (element > array[index + 1]) {
        array[index] = array[index + 1];
        array[index + 1] = element;
        sorted = false;
      }
    });
  }
  return arr;
}
