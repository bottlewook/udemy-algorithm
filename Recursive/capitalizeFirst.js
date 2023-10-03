// capitalizeFirst라는 재귀 함수를 작성하시오.
// 문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수입니다.

function capitalizeFirst(arr) {
  let answer = [];

  function helper(array) {
    if (array.length === 0) return;
    answer.push(array[0][0].toUpperCase() + array[0].slice(1));

    return helper(array.slice(1));
  }
  helper(arr);
  return answer;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
