# matter.js

![experimental](https://img.shields.io/badge/status-Experimental-red) [![license](https://img.shields.io/badge/license-Apache2-green.svg)](https://raw.githubusercontent.com/project-chip/matter.js/master/LICENSE)

Implementation of Matter protocol in typescript with no native dependencies (and very limited dependencies).

## Current status

This is work in progress.

Completed implementations:
* TLV codec
* 12 cluster defintions (including TLV structures for all messages)

## matter.js usage

matter.js is used at the core of those two projects:
* [matternode](https://github.com/project-chip/matternode): a light-weight node.js implementation of a Matter Node
* [node-matter](https://github.com/mfucci/node-matter): a Matter client / server running on node.js compatible with HA (Android / iOs support in progress)

## Tests

Run tests in node.js: npm run test

Run tests in the browser: npm run test-web

test-web will create a /coverage directory conatining the test code coverage
