function combine(...arrays) {
  let maxarr = 0;
  arrays.forEach((arr) => {
    if (arr.length > maxarr) {
      maxarr = arr.length;
    }
  });
  const combArr = [];
  for (let i = 0; i < maxarr; i++) {
    arrays.forEach((arr) => {
      if (arr[i] !== undefined) {
        combArr.push(arr[i]);
      }
    });
  }
  return combArr;
  }
