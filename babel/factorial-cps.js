"use strict";

function factorial(_x, _x2) {
  var _again = true;

  _function: while (_again) {
    _again = false;
    var n = _x,
        callback = _x2;

    if (n <= 1) {
      return callback(1);
    }_x = n - 1;

    _x2 = function (pre) {
      return callback(n * pre);
    };

    _again = true;
    continue _function;
  }
}

function id(_) {
  return _;
}

[0, 1, 2, 3, 4, 5, 10, 100, 1000, 10000, 100000].forEach(function (n) {
  console.log(n, factorial(n, id));
});