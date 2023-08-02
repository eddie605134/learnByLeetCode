/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  dfs(nums, []);

  function dfs(nums, path) {
    if (!nums.length) result.push(path);
    for (let i = 0; i < nums.length; i++) {
      dfs([...nums.slice(0, i), ...nums.slice(i + 1)], [...path, nums[i]]);
    }
  }
  return result;
};
const result = permute([1, 2, 3]);
console.log('result: ', JSON.stringify(result));
// input: [1, 2]
