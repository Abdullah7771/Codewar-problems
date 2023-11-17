function createPhoneNumber(numbers){
  var comp=numbers.join('');

  const pat1=comp.slice(0,3);
  const pat2=comp.slice(3,6);
  const pat3=comp.slice(6);
  
 return `(${pat1}) ${pat2}-${pat3}`
}
