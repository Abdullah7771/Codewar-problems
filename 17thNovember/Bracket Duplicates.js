function stringParse(str) {
  if (typeof str != "string") {
    return "Please enter a valid string";
  }
  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count > 2) {
        console.log(count);
        result += `${str[i].repeat(2)}[${str[i].repeat(count - 2)}]`;
      } else {
        result += str[i].repeat(count);
      }
      count = 1;
    }
  }
  return result;
}

