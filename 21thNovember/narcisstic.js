function narcissistic(value) {

  var sp = value.toString();
  var sum = 0;
  for (const digit of sp) {
    sum += Math.pow(Number(digit), sp.length);
  }

  return sum == value;
}

console.log(narcissistic(42678290603));
