'use strict';

function factorial(n) {
  var f = function(n, callback) {
    if (n <= 1) return callback(1);
    return f(n - 1, function(pre) {
      return callback(n * pre);
    });
  };
  return f(n, function(_) {return _;});
}

[0,1,2,3,4,5,10,100,1000,10000,100000].forEach(function(n) {console.log(n, factorial(n))});
