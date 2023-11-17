function isAlt(str) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  const vowels = "aeiou";

  var count = 1;
  for (let i = 0; i < str.length; i++) {
    if (consonants.includes(str[i]) && vowels.includes(str[i + 1])) {
      count++;
    } else if (vowels.includes(str[i]) && consonants.includes(str[i + 1])) {
      count++;
    }
  }
  if (count == str.length) {
    return true;
  } else {
    return false;
  }
}
