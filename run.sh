#!/bin/sh

echo "# factorial"
echo "\n## factorial - original"
node src/factorial.js
echo "\n## factorial - babel"
node babel/factorial.js
echo "\n## factorial - traceur"
node traceur/factorial-loader.js

echo "\n# fibonacci"
echo "\n## fibonacci - original"
node src/fibonacci.js
echo "\n## fibonacci - babel"
node babel/fibonacci.js
echo "\n## fibonacci - traceur"
node traceur/fibonacci-loader.js
