'use strict';

function factorial(n, callback) {
  if (n <= 1) return callback(1);
  return factorial(n - 1, function(pre) {
    return callback(n * pre);
  });
}

function id(_) {return _;}

[0,1,2,3,4,5,10,100,1000,10000,100000].forEach(function(n) {console.log(n, factorial(n, id))});
