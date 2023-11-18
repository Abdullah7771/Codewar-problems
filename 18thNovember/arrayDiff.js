function arrayDiff(arr1, arr2) {
  var i = 0;

  while (i < arr1.length) {
    if (arr2.includes(arr1[i])) {
      arr1.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr1;
}

console.log(arrayDiff([1, 2, 3], [1, 2]));
