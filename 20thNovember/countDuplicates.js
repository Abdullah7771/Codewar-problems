function duplicateCount(text) {
  var low = text.toLowerCase();
  var charMap = new Map();

  var count = 0;
  for (const char of low) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  for (const x of charMap.values()) {
    if (x > 1) {
      count++;
    }
  }
  return count;
}

duplicateCount("aabbcde");
