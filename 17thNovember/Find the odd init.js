function findOdd(arr) {
  var counts = {};

  for (let num of arr) {
      counts[num] = (counts[num] || 0) + 1;
      console.log(counts)
  }
  for (let key in counts) {
    if (counts[key] % 2 == 1) {
      return parseInt(key);
    }
  }
  return null;
}

console.log(findOdd([1,2,1]));
