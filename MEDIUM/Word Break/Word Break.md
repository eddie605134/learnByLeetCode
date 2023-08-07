# Word Break 

## 動態規劃 （Dynamic Programming）

其主要的思想是將一個複雜的問題分解成一系列較小的子問題，並將子問題的答案存儲起來，避免重複計算。

這裡，你在用一個巢狀的迴圈來建立子字串，並檢查這些子字串是否存在於字典中。你從頭開始構建子字串，每次增加一個字符，然後檢查所有以該字符結尾的子字串是否在字典中。

這種特定的策略被稱為「自底向上」的動態規劃，因為你從最小的問題（也就是最短的字串）開始，並逐漸構建更長的字串。

## 補充
滑動窗口（Sliding Window）：此策略主要用於需要連續子字串或子陣列的問題，例如求最長的沒有重複字符的子字串，或者是求最大的子陣列和。這種策略通常涉及到兩個指標（一個用來擴展窗口，另一個用來收縮窗口）。

快慢指針（Two Pointers）：此策略用於需要在線性時間內解決問題的場合，例如找出排序後的陣列中的兩個數字，使得它們的和等於特定值，或者是判斷一個連結列表是否存在環。

遞歸（Recursion）：遞歸策略是在需要多次進行同一操作以達到最終結果的情況下使用，例如在二叉樹或圖的遍歷中，或者在需要尋找所有可能解的情況下，如回溯法（Backtracking）問題。
---

### 滑動窗口（Sliding Window） - 用於找出字符串中最長的無重複字符子串：

```javascript
var lengthOfLongestSubstring = function(s) {
  let windowCharsMap = {};
  let windowStart = 0;
  let maxLength = 0;
  for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const endChar = s[windowEnd];
    if(windowCharsMap[endChar] >= windowStart) {
        windowStart = windowCharsMap[endChar] + 1;
    }
    windowCharsMap[endChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
};
```

---
### 快慢指針（Two Pointers） - 用於找出排序過的數組中兩個數的和為目標數：
```javascript
var twoSum = function(numbers, target) {
  let low = 0, high = numbers.length - 1;
  while(low < high) {
    let sum = numbers[low] + numbers[high];
    if(sum == target) return [low + 1, high + 1];
    else if(sum < target) low++;
    else high--;
  }
  return [-1, -1];
};
```
---
### 遞歸（Recursion） - 用於遍歷二叉樹：
```javascript
function traverse(node) {
  if(node == null) return;
  console.log(node.value); // 輸出當前節點值
  traverse(node.left); // 遍歷左子樹
  traverse(node.right); // 遍歷右子樹
}
```