// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Example 1:

// Input: s = "Was it a car or a cat I saw?"

// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:

// Input: s = "tab a cat"

// Output: false
// Explanation: "tabacat" is not a palindrome.


  
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
  
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    isPalindrome(s) {
        const alphaNumerixRegex = /^[a-zA-Z0-9]+$/
        const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return str === str.split('').reverse().join('');
    }

    // Time Complexity: O(n) Space Complexity: 1
    isPalindromeV2(s) {
      const alphaNumerixRegex = /[a-zA-Z0-9]/; 
      let i = 0, j = s.length - 1;
      const refactoredStr = s.toLowerCase();
      
      while (i < j) {
          // keep skipping non alphanumeric character until it encounters a valid character to compare with
          while (i < j && !alphaNumerixRegex.test(refactoredStr[i])) i++; 
          while (i < j && !alphaNumerixRegex.test(refactoredStr[j])) j--;
          
          if (refactoredStr[i] !== refactoredStr[j]) return false;
  
          i++;
          j--;
     }
    
     return true;
  }
    
}
