function validCreditCard(str) {
  var arr = str.toString().split("");
  if (arr.length % 2 == 0) {
    for (let i = 0; i < arr.length; i += 2) {
      arr[i] = Number(arr[i]) * 2;
    }
  } else {
    for (let i = 1; i < arr.length; i += 2) {
      arr[i] = Number(arr[i]) * 2;
    }
  }
  console.log(arr);

  var mp = arr.map((num) => (Number(num) > 9 ? Number(num) - 9 : Number(num)));

  var reduce = mp.reduce((acc, c) => acc + c);

  return reduce % 10 == 0;
}

// validCreditCard(2121)
validCreditCard(1230);
