@project-chip/matter.js / [Modules](modules.md)

# matter.js

Implementation of Matter protocol in typescript with no native dependencies (and very limited dependencies).

This is the JavaScript only Core of the Matter protocol. It is used by other projects to implement Matter Nodes and Clients and add the relevant specific implementations for Network and other elements.

The following features are abstracted away to allow to be implemented environment specific:
* Network (UDP/MDNS)
* Crypto (to be split out)
* Storage
* Date/Timer
* Logger (Default uses "console")

## Exported functionality
This library exports the Matter protocol functionality as well as some helper functions as named exports:

| Export                                  | Description                                                                                     |
|-----------------------------------------|-------------------------------------------------------------------------------------------------|
| `@project-chip/matter.js`               | Exports the API to implement a Device or a Controller.                                          |
| `@project-chip/matter.js/certificate`   | Exports Certificate (Root-/PAA/PAI/IAC/DA-Certificates) related functionality                   |
| `@project-chip/matter.js/cluster`       | Exports Matter Cluster definitions and Default Cluster-Handlers                                 |
| `@project-chip/matter.js/codec`         | Exports Codecs for e.g. Matter-Messages                                                         |
| `@project-chip/matter.js/common`        | Exports certain common functionalities                                                          |
| `@project-chip/matter.js/crypto`        | Exports Crypto related abstract functionality that needs to be implemented platform specific!   |
| `@project-chip/matter.js/datatype`      | Exports Matter Data types                                                                       |
| `@project-chip/matter.js/fabric`        | Exports Matter-Fabric functionality                                                             |
| `@project-chip/matter.js/interaction`   | Exports Matter Interaction protocol functionality                                               |
| `@project-chip/matter.js/log`           | Exports Logging functionality (based on "console")                                              |
| `@project-chip/matter.js/math`          | Exports Math functionality used by Matter                                                       |
| `@project-chip/matter.js/mdns`          | Exports Basic MDNS functionality (uses Network implementation)                                  |
| `@project-chip/matter.js/model`         | Exports a JavaScript version of the Matter data model                                           |
| `@project-chip/matter.js/net`           | Exports Basic Network abstract functionality that needs to be implemented platform specific!    |
| `@project-chip/matter.js/protocol`      | Exports Basic Matter protocol functionality                                                     |
| `@project-chip/matter.js/schema`        | Exports Schema definitions and functionality                                                    |
| `@project-chip/matter.js/securechannel` | Exports Secure Channel functionality                                                            |
| `@project-chip/matter.js/session`       | Exports Session and Secure-Session functionality                                                |
| `@project-chip/matter.js/spec`          | Exports Matter Specification References                                                         |
| `@project-chip/matter.js/storage`       | Exports Basic Storage abstract functionality that needs to be implemented platform specific!    |
| `@project-chip/matter.js/time`          | Exports Basic Time/Timer abstract functionality that needs to be implemented platform specific! |
| `@project-chip/matter.js/tlv`           | Exports Matter TLV type definitions                                                             |
| `@project-chip/matter.js/util`          | Exports Basic Utility functionality                                                             |

Both exports and the typings are exported as CommonJS and ES6 modules.

For more details please refer to the [API Documentation](../../docs/matter.js).

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

## matter.js usage

matter.js is used at the core of those two projects:
* [matternode](https://github.com/project-chip/matternode): a light-weight node.js implementation of a Matter Node
* [matter-node.js](../matter-node.js/README.md): a Matter client / server running on node.js compatible with HA (Android / iOs support in progress)

## Building

* `npm run build`: Build all code and create CommonJS and ES6 variants in dist directory. This will built incrementally and only build the changed files.
* `npm run build-clean`: Clean the dist directory and build all code from scratch

## Tests

* `npm run test-node`: Run tests in node.js
* `npm run test-web`: Run tests in the browser
* `npm run test`: Run all tests

test-web will create a /coverage directory containing the test code coverage
