function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    let fac = n;
    while(n > 1) {
      n--;
      fac *= n;
    }
    return fac;
  }
}

