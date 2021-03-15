/**
 * 實作KMP
 * 搜尋小字串IN大字串
 */
const reverseString = s => s.split('').reverse().join('');

function prefixTable(pattern) {
/*  主要有兩個重點：
//   1. 可以透過前一次的最大前後綴結果來推算這一次的最大前後綴長度
//      舉例來說：
//        當 'ABCA' 變成 'ABCAB' 的時候，
//        其實只是在後面多加一個 B，
//        這時候只要比較前一個的 最大共同後綴長度+1 個字(B) 和 新加入的 B 是否匹配，
//        就可以決定此輪的最大共同前後綴長度了。
//
//   2. 失配時，目前比較的 char 要再比較一次第一個 char
//      舉例來說：
//        當 'ABCAB' 變成 'ABCABA' 的時候，
//        根據第一點，比較的基準 C 和新加入的 A 發生了失配，
//        這代表與前一輪的最大共同前後綴沒有匹配，
//        但不代表這一輪沒有最大共同前後綴，
//        有可能與第一個字元 A 發生了匹配。 */

  let failures = [0];
  let i = 0
  let j = 1

  while(j < pattern.length) {
    if (pattern[i] === pattern[j]) {
      failures[j] = failures[j-1] + 1;
      i++;
    } else {
      i = 0;
      failures[j] = (pattern[i] === pattern[j]) ? 1 : 0;
    }
    j++;
  }
  return failures;
}
// (反轉字串 - 最長匹配字串 ) + 正常字串 = 最短回文字串
const shortestPalindrome = s => {
  const reverseStr = reverseString(s);
  const combineStr = s + '#' + reverseStr;
  const s_length = combineStr.length;
  const next = prefixTable(combineStr)
  console.log(reverseStr.substring(0, s.length - next[s_length - 1]) + s);
  return reverseStr.substring(0, s.length - next[s_length - 1]) + s;
}

shortestPalindrome('abab')