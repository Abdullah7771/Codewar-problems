function sexy_prime(x, y){
    function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    if (isPrime(x) && isPrime(y)) {
        if (Math.abs(x - y) === 6) {
            return true;
        }
    }
    
    return false;

}
