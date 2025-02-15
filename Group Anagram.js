function groupAnagrams(words) {
    let map = {};

    for (let word of words) {
        let sortedWord = word.split('').sort().join('');

        if (!map[sortedWord]) {
            map[sortedWord] = [];
        }
        map[sortedWord].push(word);
    }

    return Object.values(map);
}

// Example
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
