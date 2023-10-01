function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let max = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  let temp = max;
  for (let i = num; i < arr.length; i++) {
    temp += arr[i] - arr[i - num];
    if (temp > max) max = temp;
  }
  return max;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
