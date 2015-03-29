"use strict";
'use strict';
var $__1 = $traceurRuntime.initTailRecursiveFunction(fibonacci);
var bigint = require('big-integer');
function fibonacci(n) {
  return $traceurRuntime.call(function(n) {
    var memo = {};
    var f = $traceurRuntime.initTailRecursiveFunction(function(n, callback) {
      return $traceurRuntime.call(function(n, callback) {
        if (n.equals(bigint.zero))
          return $traceurRuntime.continuation(callback, null, [bigint.zero]);
        if (n.equals(bigint.one))
          return $traceurRuntime.continuation(callback, null, [bigint.one]);
        if (memo[n.toString()])
          return $traceurRuntime.continuation(callback, null, [memo[n]]);
        return $traceurRuntime.continuation(f, null, [n.subtract(1), $traceurRuntime.initTailRecursiveFunction(function(p1) {
          return $traceurRuntime.call(function(p1) {
            return $traceurRuntime.continuation(f, null, [n.subtract(2), $traceurRuntime.initTailRecursiveFunction(function(p2) {
              return $traceurRuntime.call(function(p2) {
                return $traceurRuntime.continuation(callback, null, [memo[n] = p1.add(p2)]);
              }, this, arguments);
            })]);
          }, this, arguments);
        })]);
      }, this, arguments);
    });
    return $traceurRuntime.continuation(f, null, [n, function(_) {
      return _;
    }]);
  }, this, arguments);
}
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000, 10000].forEach(function(n) {
  console.log(n, fibonacci(bigint(n)).toString());
});
