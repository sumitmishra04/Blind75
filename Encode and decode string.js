function encode(strs) {
    return strs.map(str => str.length + "|" + str).join("");
}

function decode(encodedStr) {
    let result = [];
    let i = 0;

    while (i < encodedStr.length) {
        let j = i;
        
        // Find the delimiter '|'
        while (encodedStr[j] !== "|") j++;
        
        // Extract length and move index
        let length = parseInt(encodedStr.substring(i, j));
        i = j + 1; // Move past '|'

        // Extract the actual string
        let str = encodedStr.substring(i, i + length);
        result.push(str);
        
        // Move to the next encoded string
        i += length;
    }

    return result;
}

// Example Usage
let strs = ["hello", "world", "foo|bar"];
let encoded = encode(strs);
console.log("Encoded:", encoded);
console.log("Decoded:", decode(encoded));
