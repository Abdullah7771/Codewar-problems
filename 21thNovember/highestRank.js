function highestRank(arr) {
  var charMap = new Map();

  for (const char of arr) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }
  let highestRank = 0;
  let mostFrequent = null;
  // Iterate through each word to find the shortest length
  for (let [key, val] of charMap) {
    if (val > highestRank || (val == highestRank && key > mostFrequent)) {
      mostFrequent = key;
      highestRank = val;
    }
  }
  console.log(mostFrequent);
}

highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]);
