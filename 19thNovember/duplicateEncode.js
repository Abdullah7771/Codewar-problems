function duplicateEncode(text) {
  var low = text.toLowerCase();
  var charMap = new Map();

  var encode = [];

  for (const char of low) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }

  for (const char of low) {
    if (charMap.get(char) > 1) {
      encode.push(")");
    } else {
      encode.push("(");
    }
  }
  console.log(encode);
  return encode.join("");
}

// duplicateEncode("din")
duplicateEncode("recede");
