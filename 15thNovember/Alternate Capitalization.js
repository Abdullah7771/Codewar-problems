function capitalize(str){
  let res="";
  for(var i=0;i<str.length;i++){
    if(i%2==0){
      res+=str[i].toUpperCase()
    }
    else
    res+=str[i].toLowerCase()

  }
  console.log(res)

 var res2=""
  for(var i=0;i<str.length;i++){
    if(i%2==0){
      res2+=str[i].toLowerCase()
    }
    else
    res2+=str[i].toUpperCase()

  }
  console.log(res2)
  var arr=[res,res2];
  return arr
};
