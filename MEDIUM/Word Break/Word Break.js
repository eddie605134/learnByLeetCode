/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  
  for(let i = 1; i <= s.length; i++){
    for(let j = 0; j < i; j++){
      if(dp[j] && wordDict.includes(s.substring(j, i))){
        dp[i] = true;
        break;
      }
    }
  }
  
  return dp[s.length];
};

/**
 * const s = 'catand'
for(let i = 1; i <= s.length; i++){
      for(let j = 0; j < i; j++){
          console.log('i = ' + i + '(包含幾個字母)' + ', j = ' + (j) + '(將結尾字符減去j個)')
          console.log('i',i)
          console.log('j', j)
          console.log(s.substring(j, i))
      }
  }
 */