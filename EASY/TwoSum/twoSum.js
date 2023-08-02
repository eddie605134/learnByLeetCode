/** 解題思路 用map
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let Mymap = new Map();
  for (let i = 0; i < nums.length; i++) {
    Mymap.set(nums[i], i);
  }
  for (let x = 0; x < nums.length; x++) {
    let goal = target - nums[x];
    if (Mymap.has(goal) && x != Mymap.get(goal)) return [x, Mymap.get(goal)];
  }
};

/** 解題思路 用for迴圈
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target - nums[i] == nums[j]) {
        var arr = [];
        arr.push(i);
        arr.push(j);
        return arr;
      }
    }
  }
};
