function calculate(string) {
  var arr = [];
  var words = string.split(' ');

  for (var i = 0; i < words.length; i++) {
    if (!isNaN(words[i]) && words[i] !== "") {
      arr.push(words[i]);
    }
  }

  if (string.includes("loses")) {
    var comb = arr[arr.length - 2];
    var loss = arr[arr.length - 1];
    var res = Number(comb) - Number(loss);
    return res;
  } else if (string.includes("gains")) {
    var comb = arr[arr.length - 2];
    var gain = arr[arr.length - 1];
    var res = Number(comb) + Number(gain);
    return res;
  } else {
    return 0;
  }
}
