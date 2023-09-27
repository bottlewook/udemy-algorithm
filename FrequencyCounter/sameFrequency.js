// 빈도수 세기 - sameFrequency
// sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.

function sameFrequency(first, second) {
  const firstToString = first.toString();
  const secondToString = second.toString();

  if (firstToString.length !== secondToString.length) return false;

  const lookup = {};
  for (let i = 0; i < firstToString.length; i++) {
    let key = firstToString[i];
    lookup[key] ? (lookup[key] += 1) : (lookup[key] = 1);
  }

  for (let i = 0; i < secondToString.length; i++) {
    let key = secondToString[i];
    if (!lookup[key]) return false;
    else {
      lookup[key] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(3589578, 5879385)); // true
