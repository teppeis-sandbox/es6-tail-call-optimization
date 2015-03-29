"use strict";
'use strict';
var $__1 = $traceurRuntime.initTailRecursiveFunction(factorial);
function factorial(n, acc) {
  return $traceurRuntime.call(function(n, acc) {
    if (n <= 1)
      return acc;
    return $traceurRuntime.continuation(factorial, null, [n - 1, n * acc]);
  }, this, arguments);
}
[0, 1, 2, 3, 4, 5, 10, 100, 1000, 10000, 100000].forEach(function(n) {
  console.log(factorial(n, 1));
});
