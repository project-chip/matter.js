@project-chip/matter-node.js / [Modules](modules.md)

# matter-node.js

[![license](https://img.shields.io/badge/license-Apache2-green.svg?style=flat)](https://raw.githubusercontent.com/mfucci/node-matter/master/LICENSE) 

Matter protocol for node.js with no native dependencies (and very limited dependencies).

> This package requires Node 16+ for the required Crypto primitives

This package is meant to be used as library as basis for Node.js based implementation of Matter Device and controller functionality
 
A basic CLI reference implementation of a Matter Device and Controller (might be split in own package soon) is available in the [matter-node.js-examples](../matter-node.js-examples/README.md) package.

For questions on how to use or pair Matter devices or controllers please refer to the [base package Readme](../../README.md#pairing-and-usage-information)! Especially for Google special steps are needed and mostly Hub devices are needed.

## Exported functionality
This library enhances Matter.js and implements the needed native functionality using Node.js 16+ as platform. The library exports the added Node.js specific implementations and also the core Matter protocol functionality as well as some helper functions as named exports.
Because of this the library can be used as only dependency which makes sure the correct matter.js version is used.

For more details please refer to the [API Documentation](../../docs/matter-node.js).

### Node.js native enhanced exports

| Export                                 | Description                                                                                         |
|----------------------------------------|-----------------------------------------------------------------------------------------------------|
| `@project-chip/matter-node.js/crypto`  | Exports Crypto base functionality and Node.js specific implementation                               |
| `@project-chip/matter-node.js/net`     | Exports network base functionality and Node.js specific implementation                              |
| `@project-chip/matter-node.js/storage` | Exports storage base functionality and Node.js specific implementation of a directory based storage |
| `@project-chip/matter-node.js/time`    | Exports Time/Timer base functionality and Node.js specific implementation                           |
| `@project-chip/matter-node.js/util`    | Exports Basic Utility functionality and enhance it by adding some Node.js specific functionality    |

### Unchanged Re-Exports from Matter.js

| Export                                       | Description                                                                      |
|----------------------------------------------|----------------------------------------------------------------------------------|
| `@project-chip/matter-node.js`               | Re-Exports the API to implement a Device or a Controller.                        |
| `@project-chip/matter-node.js/certificate`   | Re-Exports Certificate (Root-/PAA/PAI/IAC/DA-Certificates) related functionality |
| `@project-chip/matter-node.js/cluster`       | Re-Exports Matter CLuster definitions and Default Cluster-Handlers               |
| `@project-chip/matter-node.js/codec`         | Re-Exports Codecs for e.g. Matter-Messages                                       |
| `@project-chip/matter-node.js/common`        | Re-Exports certain common functionalities                                        |
| `@project-chip/matter-node.js/datatype`      | Re-Exports Matter Data types                                                     |
| `@project-chip/matter-node.js/fabric`        | Re-Exports Matter-Fabric functionality                                           |
| `@project-chip/matter-node.js/interaction`   | Re-Exports Matter Interaction protocol functionality                             |
| `@project-chip/matter-node.js/log`           | Re-Exports Logging functionality (based on "console")                            |
| `@project-chip/matter-node.js/math`          | Re-Exports Math functionality used by Matter                                     |
| `@project-chip/matter-node.js/mdns`          | Re-Exports Basic MDNS functionality (uses Network implementation)                |
| `@project-chip/matter-node.js/model`         | Re-Exports a JavaScript version of the Matter data model                         |
| `@project-chip/matter-node.js/protocol`      | Re-Exports Basic Matter protocol functionality                                   |
| `@project-chip/matter-node.js/schema`        | Re-Exports Schema definitions and functionality                                  |
| `@project-chip/matter-node.js/securechannel` | Re-Exports Secure Channel functionality                                          |
| `@project-chip/matter-node.js/session`       | Re-Exports Session and Secure-Session functionality                              |
| `@project-chip/matter-node.js/spec`          | Re-Exports Matter Specification References                                       |
| `@project-chip/matter-node.js/tlv`           | Re-Exports Matter TLV type definitions                                           |
Both exports and the typings are exported as CommonJS only!.

### Typescript note
To have Typescript and your IDE know all the relevant exported functionality you need to use the following in your tsconfig.json:

```json5
{
    "compilerOptions": {
        "moduleResolution": "node16", // Required to support package.json exports
        "module": "node16" // Required to make sure all imports are js
    }
}
```

## Building

* `npm run build`: Build all code and create CommonJS and ES6 variants in dist directory. This will built incrementally and only build the changed files.
* `npm run build-clean`: Clean the dist directory and build all code from scratch

## Testing

* `npm run test`: Run all code-side tests

## Chip-Tool Certification Testing
To make sure that matter.js is compliant to the Matter specifications we implemented automated testing options by using the test suites included in chip-tool. These tests are not part of the standard test run describe above because they need prerequisites and also a lot of resources.

Please refer to the  [test-chip](./test-chip/README.md) folder for prerequisites and details.
