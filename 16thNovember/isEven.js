var isEven = function (n) { //if n is even return true, otherwise, return false
  const even=n/2;
   const str=String(even)
   if(str.includes(".")){
    return false
   }
   return true
}

//cannot use % or .even
