function isPalindrome(word) {
  // Write your algorithm here
  const reverse = function (string) {
    return string.split("").reverse().join("");
  }
  if (word === reverse(word)) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  will take in a string 
  will strickly compare that input with the same but rever. 
  will return a bloolean
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
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;