function likes(names) {
  if (names.length == 0) {
    return "no one likes this";
  } else if (names.length > 0 && names.length < 4) {
    if (names.length == 1) return `${names[0]} likes this`;
    else if (names.length == 2) return `${names[0]} and ${names[1]} like this`;
    else if (names.length == 3)
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4) {
    var sl = names.slice(0, 2);
    console.log(sl);
    var rem = names.length - sl.length;
    return `${sl[0]} and ${sl[1]} and ${rem} likes this`;
  }
}

console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark", "Kol"]));
