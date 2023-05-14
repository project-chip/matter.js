#!/bin/env bash

set -e

rm -f src/cluster/interface/*Interface.ts
tsc -b tsconfig.generate.json
cp package-cjs.json out/generate/package.json
node out/generate/generate.js
