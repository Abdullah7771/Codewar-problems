function findNeedle(haystack) {
var word="needle";
  var index=haystack.indexOf(word);
  if(index!=-1)
  return "found the needle at position " + index
  else
    return false
}
