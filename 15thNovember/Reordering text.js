   var sp = text.split(" ");

  var ind = 0;
  for (var i = 0; i < sp.length; i++) {
    var c = sp[i].charAt(0);
    console.log(c);
    if (c == c.toUpperCase()) {
      ind = i;
      console.log(i);
    }
  }

  var sp2 = [...sp];
  var spl = sp.splice(ind, 1);

  var arr = [sp2[ind], ...sp];
  var str = arr.join(" ");
  return str;
