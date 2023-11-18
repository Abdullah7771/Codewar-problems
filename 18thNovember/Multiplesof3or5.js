function solution(number) {
  var arr = [];
  if (number < 0 || number == 0 || number == 1 || number == 2) {
    return 0;
  }
  for (var i = 0; i <number; i++) {
    if (Number.isInteger(i / 3)) {
      arr.push(i);
    } else if (Number.isInteger(i / 5)) {
      arr.push(i);
    }
  }
  return arr.reduce((acc, c) => acc + c);
}

console.log(solution(10));
