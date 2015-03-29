Demo of ES6 Tail Call Optimization
====

> Demo of ES6 tail call optimization with Babel and Traceur

See the result log: [run.log](./run.log)

* [factorial](src/factorial.js): Simple tail call => Both Babel and Traceur can optimize.
* [fibonacci](src/fibonacci.js): CPS (Continuation Passing Style) => Only Traceur can optimize now.

## How to build

`git clone`, `npm install` and `npm test`.
