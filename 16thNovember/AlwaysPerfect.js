function checkRoot(string){
 const sp = string.split(",");
  var flag = false;
  for (var i = 0; i < sp.length; i++) {
    if (isNaN(sp[i])) {
      flag = true;
    }
  }
  if (sp.length > 4 || sp.length < 4 || flag) {
    return "incorrect input";
  }
  for (var i = 1; i < sp.length; i++) {
    if (sp[i] - sp[i - 1] !== 1) {
      flag = true;
    }
  }
  if (flag) {
    return "not consecutive";
  }

  let result = sp.reduce((a, b) => {
    return a * b;
  }, 1);

  var res = result + 1;
  let sq = Math.sqrt(res);
  return `${res}, ${sq}`;
}
