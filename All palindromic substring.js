// Given a string s, return the number of substrings within s that are palindromes.

// A palindrome is a string that reads the same forward and backward.

// Example 1:

// Input: s = "abc"

// Output: 3
// Explanation: "a", "b", "c".

// Example 2:

// Input: s = "aaa"

// Output: 6
// Explanation: "a", "a", "a", "aa", "aa", "aaa". Note that different substrings are counted as different palindromes even if the string contents are the same.


function allPalindromicSubstrings(s) {
    if (s.length < 2) return [s]; 

    let results = []
    
    for (let char of s) {
        results.push(char)
    }

    function expandFromCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            results.push(s.substring(left, right + 1))
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandFromCenter(i - 1, i + 1); // Check for odd-length palindromes
        expandFromCenter(i, i + 1);     // Check for even-length palindromes
    }

    return results; 
}

// Example usage:
console.log(allPalindromicSubstrings('aaa')); 
