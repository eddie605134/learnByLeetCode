/*
* A string is said to be beautiful if "b" occurs in it no more times than "a"; "c" occurs in it no more times than "b"; etc.
* Given a string s, check whether it is beautiful.
*/ 

function isBeautifulString (inputString) {
  const alphabet = [];
  for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    alphabet.push(String.fromCharCode(i));
  }

  const letters = Array(alphabet.length).fill(0);

  for (let letter of inputString) {
    letters[alphabet.indexOf(letter)]++;
  }
  console.log(letters);
  for (let i = 0; i < letters.length; i++) {
    if (letters[i + 1] > letters[i]) {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
}

isBeautifulString("aaabbccdd");