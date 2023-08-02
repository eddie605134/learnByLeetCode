/**
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * 
 * @param {string} s 
 * @return {number} 
 */

const lengthOfLongestSubstring = s => {
  let maxLength = 0;
  let startIdx = 0;
  let endIdx = 0;

  let curSet = new Set();

  while (endIdx < s.length) {
    const char = s[endIdx]
    if (!curSet.has(char)) {
      curSet.add(char);
      let windowLength = endIdx - startIdx;
      if (windowLength > maxLength) {
        maxLength = windowLength;
      }
    } else {
      startIdx++;
    }
    endIdx++;
  }

  return maxLength;
}

let answer = lengthOfLongestSubstring('avaavvawsrawsre')

console.log(answer);


//別人解法
/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLongestSubstring = s => {
  let maxLength = 0, count = 0;
  let charSet = new Set();
  let leftBound = 0, rightBound = 0;

  if(!s) {
    return maxLength;
  }

  while (rightBound < s.length) {
    const char = s[rightBound];

    if(!charSet.has(char)) {
      charSet.add(char);
      count++;

      if(count > maxLength) {
        maxLength = count;
      }
    } else {
      while(s[leftBound] !== s[rightBound]) {
        charSet.delete(s[leftBound]);
        leftBound++;
        count--;
      }

      leftBound++
    }

    rightBound++;
  }

  return maxLength;
};