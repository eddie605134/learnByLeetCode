/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    function check(m, nums, p) {
        const n = nums.length;
        for (let i = 0; i < n - 1 && p; i++) {
            if (nums[i + 1] - nums[i] > m)
                continue;
            p--;
            i++;
        }
        return p <= 0;
    }
    nums.sort((a, b) => a - b);
    let l = 0, r = nums[nums.length - 1] - nums[0];
    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (check(mid, nums, p)) r = mid;
        else l = mid + 1;
    }
    return l;
};