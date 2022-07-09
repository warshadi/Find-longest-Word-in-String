
function findLongestWord(str) {
    let arr = str.split(" ");

    let longestword = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestword) {
            longestword = arr[i].length;
        }
    }
    return longestword;
}

let z = "May the force be with you";

console.log(findLongestWord(z));