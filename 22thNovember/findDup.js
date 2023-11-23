function findDup(arr) {
  var charMap = new Map();

  var count = 0;
  for (const char of arr) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  for (const [key, val] of charMap) {
    if (val > 1) {
      return key;
    }
  }
}

console.log(findDup([8, 2, 6, 3, 7, 2, 5, 1, 4]));
