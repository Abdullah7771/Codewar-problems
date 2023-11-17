function oddNotPrime(n){
      var count=0;
    function isPrime (n) {
    for(let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if(n % i === 0) return false;
    }
    return n > 1;
}
for(var i=1;i<=n;i++){

    if(((i+1) % 2 ==0) && !isPrime(i)){
     count++
    }
    
}
return count
}
