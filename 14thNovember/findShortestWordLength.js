function findShort(s){
  const words = s.split(' ');

  // Initialize shortestLength with a very large number
  let shortestLength = words[0].length;

  // Iterate through each word to find the shortest length
  for (let word of words) {
    const currentLength = word.length;
    if (currentLength < shortestLength) {
      shortestLength = currentLength;
    }
  }

  return shortestLength;
  
}
