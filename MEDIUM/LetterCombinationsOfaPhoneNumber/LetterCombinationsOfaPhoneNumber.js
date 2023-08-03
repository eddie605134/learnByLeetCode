var letterCombinations = function (digits) {
  const telTypeMapping = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
  ]);

  // const result = [];

  // if (digits.length === 0) {
  //   return result;
  // }

  // const dfs = (index, path) => {
  //   if (path.length === digits.length) {
  //     result.push(path);
  //     return;
  //   }

  //   const letters = telTypeMapping.get(digits[index]);
  //   for (const letter of letters) {
  //     dfs(index + 1, path + letter);
  //   }
  // };

  // dfs(0, '');
  // return result;

  const result = [];

  if (digits.length === 0) return result;

  // dfs 通常有兩個參數，一個是當前層數，一個是當前層的結果
  const dfs = (index, path) => {
    // 接下來要設定終止條件
    // 當當前層數等於輸入的長度時，就代表已經到最後一層了，就可以把結果放入 result
    if (path.length === digits.length) {
      result.push(path);
      return;
    }

    // 這邊要取得當前層數的字母
    const letters = telTypeMapping.get(digits[index]);
    // 然後開始遍歷字母，下一個字母就是當前層數加一
    for (let letter of letters) {
      dfs(index + 1, path + letter);
    }
  };
  dfs(0, '');
  return result;
};

// console.log(letterCombinations('35'));

// ---------------------------------------------------------------- --------------------------------
// ---------------------------------------------------------------- --------------------------------
// ---------------------------------------------------------------- --------------------------------
// ---------------------------------------------------------------- --------------------------------
// ---------------------------------------------------------------- --------------------------------

// 性能較優解
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations2 = function (digits) {
  var dic = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  // 回傳輸出結果的陣列 output
  var output = [];

  // 如果數入的字串不為空，就去計算它的排列
  if (digits.length !== 0) {
    console.log('呼叫遞迴');
    letterCombi(digits, '');
  }

  return output;

  function letterCombi(digits, str) {
    // 如果向下找沒有資料了，就存進陣列
    if (digits === '') {
      output.push(str);
    } else {
      console.log('找出第一個的數字');
      console.log(digits[0]);
      console.log('找出對應的字典array');
      console.log(dic[digits[0]]);
      console.log('計算出array的長度');
      console.log(dic[digits[0]].length);
      for (var i = 0; i < dic[digits[0]].length; i++) {
        console.log(
          `扣掉${str}之後的字串${digits.substr(1)}與${
            str + dic[digits[0]][i]
          }遞迴`
        );
        letterCombi(digits.substr(1), str + dic[digits[0]][i]);
      }
    }
  }
};

console.log(letterCombinations2('23'));
