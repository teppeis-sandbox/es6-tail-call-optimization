#!/bin/sh

echo "# factorial"
echo "\n## factorial - original"
node src/factorial.js
echo "\n## factorial - babel"
node babel/factorial.js
echo "\n## factorial - traceur"
node traceur/factorial-loader.js

echo "# factorial-cps"
echo "\n## factorial-cps - original"
node src/factorial-cps.js
echo "\n## factorial-cps - babel"
node babel/factorial-cps.js
echo "\n## factorial-cps - traceur"
node traceur/factorial-cps-loader.js

echo "\n# fibonacci"
echo "\n## fibonacci - original"
node src/fibonacci.js
echo "\n## fibonacci - babel"
node babel/fibonacci.js
echo "\n## fibonacci - traceur"
node traceur/fibonacci-loader.js
