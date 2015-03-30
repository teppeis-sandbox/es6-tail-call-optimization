"use strict";

var bigint = require("big-integer");

/**
 * @param {bigint} n
 * @return {bigint}
 */
function fibonacci(n) {
  var memo = {};

  /**
   * @param {bigint} n
   * @param {function(bigint): bigint} callback
   * @return {bigint}
   */
  var f = (function (_f) {
    var _fWrapper = function f(_x, _x2) {
      return _f.apply(this, arguments);
    };

    _fWrapper.toString = function () {
      return _f.toString();
    };

    return _fWrapper;
  })(function (n, callback) {
    if (n.equals(bigint.zero)) return callback(bigint.zero);
    if (n.equals(bigint.one)) return callback(bigint.one);
    if (memo[n.toString()]) return callback(memo[n]);
    return f(n.subtract(1), function (p1) {
      return f(n.subtract(2), function (p2) {
        return callback(memo[n] = p1.add(p2));
      });
    });
  });

  return f(n, function (_) {
    return _;
  });
}

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000, 10000].forEach(function (n) {
  console.log(n, fibonacci(bigint(n)).toString());
});