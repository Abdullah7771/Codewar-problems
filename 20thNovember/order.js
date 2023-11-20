function order(words) {
  var sortedArr = [];
  var sp = words.split(" ");

  for (let i = 1; i <= sp.length; i++) {
    for (let j = 0; j < sp.length; j++) {
      if (sp[j].includes(i.toString())) {
        sortedArr.push(sp[j]);
        break;
      }
    }
  }

  return sortedArr.join(" ");
}

order("is2 Thi1s T4est 3a");
