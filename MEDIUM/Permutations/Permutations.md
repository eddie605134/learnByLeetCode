# Permutations 

這個解法使用了一種稱為深度優先搜索 **（DFS，Depth-First Search）** 的策略。
該策略的主要思想是嘗試所有可能的組合，並在確定一種組合不可行後返回（也就是“深度優先”搜索的含義）。

以下是這種方法的具體步驟：

1. 如果當前的數組為空（也就是說已經遍歷過所有的數字），就將當前的結果存入結果數組中。
2. 否則，對當前數組的每個數字進行迭代。從數組中移除當前的數字，然後將它加入當前的路徑（也就是說正在構建的組合）。
3. 接著遞歸調用這個過程，對剩下的數字進行同樣的操作。

這個方法的時間複雜度仍然為 O(n*n!)，因為有 n! 種可能的組合，而每種組合需要 O(n) 的時間來生成並存儲。

## 為什麼使用 DFS?
所有可能的答案都可以形成一棵樹：在這個問題中，所有可能的排列可以被視為一棵由空排列開始擴展的樹。例如，對於 [1,2,3]，在樹的根部是空排列 []，然後它的子節點為 [1], [2], [3]，分別代表第一個位置的三種可能選擇，以此類推。

1. 每一個節點（答案）都可以由其父節點演化而來：在這個問題中，一個更完整的排列可以由較不完整的排列經過添加一個新的數字而來。

2. 問題的解答數量相對於問題規模較大：由於一個長度為 n 的數組有 n! 種排列方式，用 DFS 可以避免儲存大量中間結果，從而節省記憶體。

3. 這些都是可以判斷使用 DFS 的關鍵點。所以，當你遇到需要遍歷所有可能組合，並且每個組合都依賴於部分前面的選擇的問題時，你就可以考慮使用 DFS。

--- 
## 詳解
這個JavaScript函數permute是用來產生一個數字陣列(nums)的所有排列(permutations)。整個過程是通過深度優先搜索(DFS)來達成的。

一開始，我們定義一個空陣列result來儲存所有的排列結果。然後，我們呼叫DFS函數，輸入原始的數字陣列和一個空陣列。

```
function dfs(nums, path) {
  if (!nums.length) result.push(path);
  for (let i = 0; i < nums.length; i++) {
    dfs([...nums.slice(0, i), ...nums.slice(i + 1)], [...path, nums[i]]);
  }
}

```
首先，如果nums陣列是空的（也就是所有的數字都已經用完了），我們就把目前的路徑（也就是一種排列）加入到結果中。

接下來是一個迴圈，我們會遍歷每個在nums陣列中的數字。

然後，對於每一個數字，我們都會再次呼叫DFS函數，這次傳入的參數有些不同：

* nums陣列現在排除了當前選中的數字（nums[i]）。這是通過[...nums.slice(0, i), ...nums.slice(i + 1)]來達成的。nums.slice(0, i)會得到一個新陣列，包含了原陣列中前i個元素，nums.slice(i + 1)則會得到一個新陣列，包含了原陣列中第i+1個到最後的元素。用這兩個陣列合併，我們就得到了一個不包含當前數字的新陣列。
* path則增加了當前選中的數字。這是通過[...path, nums[i]]來達成的。這樣可以保留先前選擇的數字，並添加新的數字到路徑中。

因此，每一次呼叫DFS，都會把一個新的數字加到路徑中，並從待選擇的數字中移除這個數字。這就是為什麼我們要用[...nums.slice(0, i), ...nums.slice(i + 1)]和[...path, nums[i]]的原因。這樣就能確保我們遍歷到所有可能的排列組合。