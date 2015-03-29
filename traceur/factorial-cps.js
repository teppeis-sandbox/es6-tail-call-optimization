"use strict";
'use strict';
var $__1 = $traceurRuntime.initTailRecursiveFunction(factorial);
function factorial(n, callback) {
  return $traceurRuntime.call(function(n, callback) {
    if (n <= 1)
      return $traceurRuntime.continuation(callback, null, [1]);
    return $traceurRuntime.continuation(factorial, null, [n - 1, $traceurRuntime.initTailRecursiveFunction(function(pre) {
      return $traceurRuntime.call(function(pre) {
        return $traceurRuntime.continuation(callback, null, [n * pre]);
      }, this, arguments);
    })]);
  }, this, arguments);
}
function id(_) {
  return _;
}
[0, 1, 2, 3, 4, 5, 10, 100, 1000, 10000, 100000].forEach(function(n) {
  console.log(n, factorial(n, id));
});
