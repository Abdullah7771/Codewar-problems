function pell(n) {
  if (n == 1) return BigInt(1) ;
  else if (n == 0) {
    return BigInt(0);
  }
  var num = BigInt(2) * pell(n - 1) + pell(n - 2);
  return num;

  
}


//Optimized Sol

function pell(n) {
   if (n == 1) return BigInt(1) ;
else if (n == 0) {
  return BigInt(0);
}

let a=BigInt(0)
let b=BigInt(1)
for (let i = 2; i <= n; i++) {
 let temp=BigInt(2) * b + a;
 a=b;
 b=temp;
 
}


return b;

}
