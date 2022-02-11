function isPalindrome(word) {
  // Write your algorithm here

  // iterate from the beginning to the middle of the word
  // racecar - how do I know that "e" is in the middle of the word,
  // --> its position is going to depend how many characters are in this word,
  // --> and if we figure out the number of characters and then I divide it by two?
  // --> racecar 7 / 2 == 3.5
  // --> aaaaaa 6 /2 == 3
  for (let i = 0; i < word.length / 2; i++) {
    
    // check each letter to the corresponding letter from the end
    // r a c e c a r
    const j = word.length - 1 - i;
    const startChar = word[i];
    const endChar = word[j];

    // if any letters don't match, return false
    if (startChar !== endChar) return false;
  }

  // else return true
  return true;
}

/* 
  Add your pseudocode here
  That means if the first letter is the same as last letter, and the second letter is the same as the second to last lette, etc. until we reach the middle, return true.

  - So, we want to iterate or (check) each letter of the word...
  -- Also, check each letter to the corresponding letter from the end...
  --- if the letters from the beginning don't match the end, then it is not a palidrome...and I can return false

  - return true

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;
