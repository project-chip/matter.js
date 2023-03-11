# JavaScript/TypeScript based Matter Implementation

![experimental](https://img.shields.io/badge/status-Experimental-red) [![license](https://img.shields.io/badge/license-Apache2-green.svg)](https://raw.githubusercontent.com/project-chip/matter.js/master/LICENSE)

Implementation of Matter protocol in typescript with no native dependencies (and very limited dependencies).

## Monorepo Overview

This repository contains multiple packages (and because of this it is a monorepo). The packages are contained in the `packages` directory and are all published separately to NPM.

* matter.js: the core Matter implementation in typescript which is JavaScript only and has no native dependencies.
* matter-node.js: a node.js implementation of a Matter

This repository uses the workspaces feature on npm to manage the dependencies between the packages. Because of this please only use `npm install` on the root of the repository. This will install all the dependencies for all the packages and also take care to create relevant symlinks between the packages.

Additionally it uses typescript project references to allow IDE support for the dependencies. These depenencies need to be added to the tsconfig.json files if needed.

You can build and test the packages separately or aly by using `npm run build` or `npm run test` on root package level.

## Code style

The project contains eslint as linter and typescript-formatter as formatter. The configuration files are located in the root directory and are valid for all packages.

The following commands are available:

* `npm run lint`: runs eslint on all packages and outputs the results and errors
* `npm run lint-fix`: runs eslint on all packages and tries to fix the errors
* `npm run format`: runs typescript-formatter on all packages and formats the code. Files will be changed in place.
* `npm run format-check`: runs typescript-formatter on all packages and checks if the code is formatted correctly. If not it will output the files that need to be formatted.

## Current status

This is work in progress.

Completed implementations:
- [X] TLV codec (coder/decoder) and schema mapping and validation engine
- [X] 12 cluster definitions (including TLV structures for all messages)

## matter.js usage

matter.js is used at the core of those two projects:
* [matternode](https://github.com/project-chip/matternode): a light-weight node.js implementation of a Matter Node
* [node-matter](https://github.com/mfucci/node-matter): a Matter client / server running on node.js compatible with HA (Android / iOs support in progress)

## Tests

Run tests in node.js: npm run test

Run tests in the browser: npm run test-web

test-web will create a /coverage directory conatining the test code coverage
