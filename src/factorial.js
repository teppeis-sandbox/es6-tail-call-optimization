'use strict';

function factorial(n, acc) {
  if (n <= 1) return acc;
  return factorial(n - 1, n * acc);
}

[0,1,2,3,4,5,10,100,1000,10000,100000].forEach(function(n) {console.log(n, factorial(n, 1))});
