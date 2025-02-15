// BASICS

// Time Complexity: O(n2)
function getAllSubstrings(s) {
    let substrings = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            substrings.push(s.substring(i, j));
        }
    }
    return substrings;
}

console.log(getAllSubstrings("abc"));

// Time Complexity: O(n)
function isPalindrome(s) {
    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false


function longestPallindrone(s) {
    if(s.length < 2) return s
    let start = 0, maxLength = 1
    
    function expandFromCenter(left, right) {
        while(left>=0 && right < s.length && s[left] === s[right]) {
            if(right-left+1 > maxLength) {
                maxLength = right-left+1
                start = left;
            }
            
            left--;
            right++
        }
    }
    for(let i =0;i<s.length; i++) {
        expandFromCenter(i-1, i+1) // for checking odd length palln as the center here always starts with one character and one character is always a pallindrome
        expandFromCenter(i, i+1) // for checking even length palln since the center is always atleast 2 characters for them
    }
    
    return s.substring(start, start + maxLength)
} 


console.log(longestPallindrone('babab'))

