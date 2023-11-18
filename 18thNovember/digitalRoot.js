function digitalRoot(n) {
 while (n>9) {
    let sum=0;
    while (n>0) {
        sum+= n % 10;
        console.log("sum " +sum)
        n=Math.floor(n /10);
        console.log("n: "+ n)

        
    }
    
    n=sum;
 }

 return n
  



}

console.log(digitalRoot(167));
