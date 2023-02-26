# matter.js

Implementation of Matter protocol in typescript with no native dependencies (and very limited dependencies).

This is the JavaScript only Core of the Matter protocol. It is used by other projects to implement Matter Nodes and Clients and add the relevant specific implementations for Network and other elements.

## matter.js usage

matter.js is used at the core of those two projects:
* [matternode](https://github.com/project-chip/matternode): a light-weight node.js implementation of a Matter Node
* [node-matter](https://github.com/mfucci/node-matter): a Matter client / server running on node.js compatible with HA (Android / iOs support in progress)

## Tests

Run tests in node.js: npm run test

Run tests in the browser: npm run test-web

test-web will create a /coverage directory containing the test code coverage
