function solve(s) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let maxSubStringVal = 0;
  let currentVal = 0;

  for (let i = 0; i < s.length; i++) {
    if (consonants.includes(s[i])) {
      currentVal += s.charCodeAt(i) - 96;
    } else {
      maxSubStringVal = Math.max(maxSubStringVal, currentVal);
      currentVal = 0;
    }
  }
  maxSubStringVal = Math.max(maxSubStringVal, currentVal);
  return maxSubStringVal;
}
console.log(solve("zodiac"));
