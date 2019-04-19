function sumMultiples(index) {
  total = 0;
  for (let i = 1; i < index; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}

sumMultiples(1000); // Answer: 233168
