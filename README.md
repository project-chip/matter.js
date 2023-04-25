# JavaScript/TypeScript based Matter Implementation

![experimental](https://img.shields.io/badge/status-Experimental-red) [![license](https://img.shields.io/badge/license-Apache2-green.svg)](https://raw.githubusercontent.com/project-chip/matter.js/master/LICENSE)

Implementation of Matter protocol in Typescript with no native dependencies (and very limited dependencies).

## Monorepo Overview

This repository contains multiple packages (and because of this it is a monorepo). The packages are contained in the `packages` directory and are all published separately to NPM.

* matter.js: the core Matter implementation in typescript which is JavaScript only and has no native dependencies.
* matter-node.js: a node.js implementation of a Matter DeviceNode and ControllerNode

This repository uses the workspaces feature on npm to manage the dependencies between the packages. Because of this please only use `npm install` on the root of the repository. This will install all the dependencies for all the packages and also take care to create relevant symlinks between the packages.

Additionally, it uses typescript project references to allow IDE support for the dependencies. These dependencies need to be added to the tsconfig.json files if needed.

You can build and test the packages separately or all by using `npm run build` or `npm run test` on root package level.

## Community communication

If you have issues please use the GitHub "Issues" feature of this repository. For questions or idea discussions please use the "Discussions" feature in GitHub.

Additionally, we started a Discord server for Matter-Integrators to allow to communicate about the protocol and how to implement Matter in various environments (not only just JavaScript/Typescript). You can join it here: https://discord.gg/ujmRNrhDuW .

## How to use it

### To develop matter.js

If you like to develop matter.js itself or want to contribute to it, you can use the following commands:

```bash
git clone https://github.com/project-chip/matter.js
cd matter.js
npm install
```

This will install all dependencies and create symlinks between the packages, so that it can be used locally. It also builds all packages.

### Matter.js

Matter.js is the core implementation of the Matter protocol in typescript. It is a JavaScript only implementation and has no native dependencies. It is build as CommonJS and ES6 variants.

Because Matter required UDP/MDNS technologies, other implementations are needed to enhance this core functionality.

For more Details see the [README.md](packages/matter.js/README.md) in the package.

PS: The above statements are only half true right now (March 2023) because we are in the middle of the split-up to move "non-Node.js" code from matter-node.js into matter.js.

### Matter-node.js

Matter-node.js uses Node.js to implement a Matter DeviceNode and ControllerNode by using Node.js for networking and other needed more native features.

You can use it right now as a command line tool.

For more Details see the [README.md](packages/matter-node.js/README.md) in the package.

## Code style

The project contains eslint as linter and typescript-formatter as formatter. The configuration files are located in the root directory and are valid for all packages.

The following commands are available:

* `npm run lint`: runs eslint on all packages and outputs the results and errors
* `npm run lint-fix`: runs eslint on all packages and tries to fix the errors
* `npm run format`: runs typescript-formatter on all packages and formats the code. Files will be changed in place.
* `npm run format-check`: runs typescript-formatter on all packages and checks if the code is formatted correctly. If not it will output the files that need to be formatted.

## Building

You can use `npm run build` on the root level to build all packages in an incremental way. This will only build the changed files.

You can use `npm run build-clean` on the root level to build all packages from scratch.

## Tests

You can use `npm run test` on the root level to run all tests for all packages.

## Current status

This is work in progress.

Completed implementations:
- [X] TLV codec (coder/decoder) and schema mapping and validation engine
- [X] 12 cluster definitions (including TLV structures for all messages)

## matter.js usage

matter.js is used at the core of those two projects:
* [matternode](https://github.com/project-chip/matternode): a light-weight node.js implementation of a Matter Node
* [matter-node.js](packages/matter-node.js/README.md): a Matter client / server running on node.js compatible with HA (Android / iOs support in progress)

