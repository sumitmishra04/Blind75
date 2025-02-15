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
