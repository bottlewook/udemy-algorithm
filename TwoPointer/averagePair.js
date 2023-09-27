// 다중 포인터 - averagePair
// averagePair라는 함수를 작성합니다. 정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인합니다. 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있습니다.

function averagePair(arr, target) {
  if (arr.length === 0) return false;
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex !== endIndex) {
    let avgValue = (arr[startIndex] + arr[endIndex]) / 2;
    if (avgValue === target) return true;
    if (avgValue > target) endIndex--;
    if (avgValue < target) startIndex++;
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
