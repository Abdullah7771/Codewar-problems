function freqSort(arr) {
  var charMap = new Map();

  for (const char of arr) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }
  console.log(charMap);

  return arr.sort((a, b) => {
    console.log(a, b);
    let freq = charMap.get(b) - charMap.get(a);
    if (freq !== 0) {
      return freq;
    } else {
      return a - b;
    }
  });
}

console.log(freqSort([12, 10, 8, 12, 7, 6, 4, 10, 10, 12]));
