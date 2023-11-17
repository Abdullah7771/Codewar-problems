function* generator(a) {
  let b = 1;

  while (true) {
    var c = a * b;
    yield `${a} x ${b} = ${c}`;
    b++;
  }
}

