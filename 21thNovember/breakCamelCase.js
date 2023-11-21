function breakCamelCase(str) {
  return str.replace(/[A-Z]/g, (match) => " " + match);
}
 
console.log(toCamelCase("camel Casing"));
