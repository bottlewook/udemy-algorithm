// 배열의 배열을 받아들이고 모든 값이 평활화(flattened)된 새 배열을 반환하는 flatten이라는 재귀(recursive ) 함수를 작성합니다.

function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  let answer = [];
  function helper(array) {
    if (array.length === 0) return;
    if (!Array.isArray(array[0])) {
      answer.push(array[0]);
    } else {
      helper(array[0]);
    }

    return helper(array.slice(1));
  }
  helper(arr);
  return answer;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
