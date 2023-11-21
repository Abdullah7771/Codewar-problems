function expandedForm(num) {
  const digits = num.toString().split("").reverse();
  const expanded = [];
  digits.forEach((digit, index) => {
    if (digit != 0) {
      expanded.push(`${digit.padEnd(index + 1, "0")}`);
    }
  });

  return expanded.reverse().join(" + ");
}

expandedForm(70304);
