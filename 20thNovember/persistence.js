function persistence(n) {
  let count = 0;
  while (n > 9) {
    count++;
    let multiply = 1;
    while (n > 1) {
      multiply *= n % 10;

      n = Math.floor(n / 10);
    }

    n = multiply;
  }

  return count;
}

console.log(persistence(999));
