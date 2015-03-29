"use strict";
'use strict';
var $__1 = $traceurRuntime.initTailRecursiveFunction(factorial);
function factorial(n) {
  return $traceurRuntime.call(function(n) {
    var f = $traceurRuntime.initTailRecursiveFunction(function(n, callback) {
      return $traceurRuntime.call(function(n, callback) {
        if (n <= 1)
          return $traceurRuntime.continuation(callback, null, [1]);
        return $traceurRuntime.continuation(f, null, [n - 1, $traceurRuntime.initTailRecursiveFunction(function(pre) {
          return $traceurRuntime.call(function(pre) {
            return $traceurRuntime.continuation(callback, null, [n * pre]);
          }, this, arguments);
        })]);
      }, this, arguments);
    });
    return $traceurRuntime.continuation(f, null, [n, function(_) {
      return _;
    }]);
  }, this, arguments);
}
[0, 1, 2, 3, 4, 5, 10, 100, 1000, 10000, 100000].forEach(function(n) {
  console.log(n, factorial(n));
});
