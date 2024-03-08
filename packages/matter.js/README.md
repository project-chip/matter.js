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

| Export                                  | Description                                                                                                                                                                                         |
|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `@project-chip/matter.js`               | Exports the API to implement a Device or a Controller.                                                                                                                                              |
| `@project-chip/matter.js/behavior`      | Exports Behavior classes (New API) as framework to implement all relevant Logic for clusters and internal logic. Contains auto-generated class structures and also Cluster default implementations. |
| `@project-chip/matter.js/certificate`   | Exports Certificate (Root-/PAA/PAI/IAC/DA-Certificates) related functionality                                                                                                                       |
| `@project-chip/matter.js/cluster`       | Exports Matter Cluster definitions and Default Cluster-Handlers                                                                                                                                     |
| `@project-chip/matter.js/codec`         | Exports Codecs for e.g. Matter-Messages                                                                                                                                                             |
| `@project-chip/matter.js/common`        | Exports certain common functionalities                                                                                                                                                              |
| `@project-chip/matter.js/crypto`        | Exports Crypto related abstract functionality that needs to be implemented platform specific!                                                                                                       |
| `@project-chip/matter.js/datatype`      | Exports Matter Data types                                                                                                                                                                           |
| `@project-chip/matter.js/device`        | Exports Matter Device relevant classes (Legacy API!)                                                                                                                                                |
| `@project-chip/matter.js/devices`       | Exports Matter Device type classes (NEW API!)                                                                                                                                                       |
| `@project-chip/matter.js/endpoint`      | Exports Matter Endpoint structure classes (NEW API!)                                                                                                                                                |
| `@project-chip/matter-.js/environment`  | Exports environment functionalities, which handes central functions like MDNS and configuration                                                                                                     |
| `@project-chip/matter.js/fabric`        | Exports Matter-Fabric functionality                                                                                                                                                                 |
| `@project-chip/matter.js/interaction`   | Exports Matter Interaction protocol functionality                                                                                                                                                   |
| `@project-chip/matter.js/log`           | Exports Logging functionality (based on "console")                                                                                                                                                  |
| `@project-chip/matter.js/math`          | Exports Math functionality used by Matter                                                                                                                                                           |
| `@project-chip/matter.js/mdns`          | Exports Basic MDNS functionality (uses Network implementation)                                                                                                                                      |
| `@project-chip/matter.js/model`         | Exports a JavaScript version of the Matter data model                                                                                                                                               |
| `@project-chip/matter.js/net`           | Exports Basic Network abstract functionality that needs to be implemented platform specific!                                                                                                        |
| `@project-chip/matter.js/node`          | Exports [Matter Node functionality](./src/) which is used as basis for a device or controller (NEW API!). It also contains Matter Interaction model abstractions for the new API.                   |
| `@project-chip/matter.js/protocol`      | Exports Basic Matter protocol functionality                                                                                                                                                         |
| `@project-chip/matter.js/schema`        | Exports Schema definitions and functionality                                                                                                                                                        |
| `@project-chip/matter.js/securechannel` | Exports Secure Channel functionality                                                                                                                                                                |
| `@project-chip/matter.js/session`       | Exports Session and Secure-Session functionality                                                                                                                                                    |
| `@project-chip/matter.js/spec`          | Exports Matter Specification References                                                                                                                                                             |
| `@project-chip/matter.js/storage`       | Exports Basic Storage abstract functionality that needs to be implemented platform specific!                                                                                                        |
| `@project-chip/matter.js/time`          | Exports Basic Time/Timer abstract functionality that needs to be implemented platform specific!                                                                                                     |
| `@project-chip/matter.js/tlv`           | Exports Matter TLV type definitions                                                                                                                                                                 |
| `@project-chip/matter.js/util`          | Exports Basic Utility functionality                                                                                                                                                                 |

Both exports and the typings are exported as CommonJS and ES6 modules.

For more details please refer to the [API Documentation](../../docs/matter.js).

### Included Cluster default implementations
Each cluster that has commands also needs to have them implemented based on the chosen feature set.

Matter.js wants to provide meaningful but general and basic default implementations for all clusters, so that it is very simply to build a certain device and already have basic functionality available. The developer can then decide if own functionality needs to be developed and can overwrite and extend these implementations or just use them.

This section contains the list of currently included clusters with default implementations.

| Cluster name                 | Features                        | Matter-Version | Additional Information                                                            |
|------------------------------|---------------------------------|----------------|-----------------------------------------------------------------------------------|
| Administrator Commissioning  | None, Basic                     | 1.1            |                                                                                   |
| General Commissioning        | None                            | 1.1            |                                                                                   |
| Identify                     | None, IdentifyQuery             | 1.1            |                                                                                   |
| Node Operational Credentials | None                            | 1.1            |                                                                                   |
| OnOff                        | None, LevelControl-For-Lighting | 1.1            | LevelControl-For-Lighting feature is exposed automatically when added to a device |

More will come over time and can also be contributed by the community!

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
