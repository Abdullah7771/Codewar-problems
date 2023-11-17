  var ind = 0;
  for (var i = 0; i < func.length; i++) {
    if (typeof func[i] === "function") {
      ind = i;
    }
  }
  console.log(func[ind]);

  var fi = arr.filter(func[ind]);
  return fi;
