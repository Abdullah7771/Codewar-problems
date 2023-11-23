function sortArray(array) {
  let oddArr = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

  var res = [];
  var oddIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      console.log(oddArr[oddIndex]);
      res.push(oddArr[oddIndex]);
      oddIndex++;
    } else {
      res.push(array[i]);
    }
  }
  return res;
}

sortArray([5, 8, 6, 3, 4]);
