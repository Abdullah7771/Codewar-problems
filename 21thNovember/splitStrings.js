function solution(str) {
  var p = [];
  if (str.length % 2 == 1) {
    str += "_";
  }
  for (let i = 0; i < str.length; i += 2) {
    p.push(str.substr(i, 2));
  }

  return p;
}

console.log(solution("abcdefdsaddsad"));
