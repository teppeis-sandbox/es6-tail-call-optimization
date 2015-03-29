#!/bin/sh

echo "factorial"
echo "factorial - original"
node src/factorial.js
echo "factorial - babel"
node babel/factorial.js
echo "factorial - traceur"
node traceur/factorial-loader.js

echo ""
echo "fibonacci"
echo "fibonacci - original"
node src/fibonacci.js
echo "fibonacci - babel"
node babel/fibonacci.js
echo "fibonacci - traceur"
node traceur/fibonacci-loader.js
