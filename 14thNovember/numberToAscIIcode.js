function convert(number){
    let res=""
    for (var i=0;i<number.length;i+=2){
        const sub=number.substring(i,i+2);
         res+=String.fromCharCode(parseInt(sub,10))
    }
  return res
}
