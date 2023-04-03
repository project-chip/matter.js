# matter.js

Implementation of Matter protocol in typescript with no native dependencies (and very limited dependencies).

This is the JavaScript only Core of the Matter protocol. It is used by other projects to implement Matter Nodes and Clients and add the relevant specific implementations for Network and other elements.

The following features are abstracted away to allow to be implemented environment specific:
* Network (UDP/MDNS)
* Crypto (to be split out)
* Storage
* Date/Timer
* Logger (Default uses "console")

## Building

* `npm run build`: Build all code and create CommonJS and ES6 variants in dist directory. This will built incrementally and only build the changed files.
* `npm run build-clean`: Clean the dist directory and build all code from scratch

## Tests

* `npm run test-node`: Run tests in node.js
* `npm run test-web`: Run tests in the browser
* `npm run test`: Run all tests

test-web will create a /coverage directory containing the test code coverage

## matter.js usage

matter.js is used at the core of those two projects:
* [matternode](https://github.com/project-chip/matternode): a light-weight node.js implementation of a Matter Node
* [matter-node.js](../matter-node.js/README.md): a Matter client / server running on node.js compatible with HA (Android / iOs support in progress)
