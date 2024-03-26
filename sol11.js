
const strings = ["programming", "algorithm", "javascript", "computer", "code", "developer", "software", "web", "function", "variable"];

function findLongestString(arr) {
    let longest = "";
    for (let str of arr) {
        if (str.length > longest.length) {
            longest = str;
        }
    }
    return longest;
}

console.log("Longest string in the array:", findLongestString(strings));
