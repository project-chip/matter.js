# JavaScript/TypeScript based Matter Implementation

[![license](https://img.shields.io/badge/license-Apache2-green.svg)](https://raw.githubusercontent.com/project-chip/matter.js/master/LICENSE)

## What is Matter?

[Matter](https://csa-iot.org/all-solutions/matter/) is a new secure, reliable and local standard protocol for smart/IoT devices launched at the end of 2022 by the [Connectivity Standards Alliance](https://csa-iot.org/). 

To learn more about Matter visit [https://csa-iot.org/all-solutions/matter/](https://csa-iot.org/all-solutions/matter/)

## What is matter.js?

matter.js is a TypeScript/JavaScript implementation of the complete Matter protocol.

Our main goal is to create a robust and compliant library that enables the seamless implementation of Matter-compatible devices, bridges, controllers, and a shell application. This effort is dedicated to improving Matter's accessibility for testers, smart home enthusiasts, and developers of OS-based IoT products. Fostering a second implementation of the Matter standard, aligned with the same specifications, not only expands the ecosystem but also contributes to the validation and increased robustness of the standard itself.

matter.js consists of a [pure JavaScript base package](./packages/matter.js) without any native dependencies, implementing the Matter protocol and required interfaces in JavaScript, along with extensive typings for The Matter standard and the matter.js APIs.
Further [packages with Node.js based native dependencies](./packages/matter-node.js) utilize the base package to implement platform-specific parts using Node.js for networking and other necessary native features or add [BLE support](./packages/matter-node-ble.js). [Node.js example scripts](./packages/matter-node.js-examples) implement example CLI scripts for Devices, Bridges or Controllers. A [Matter Shell](./packages/matter-node-shell.js) allow to interact with Matter devices as controller via a CLI interface.

To use matter.js in your own Non-Node.js based projects you need to implement the platform specific parts. See [How to use matter.js in own projects](#how-to-use-matterjs-in-own-projects) for more details. If you do this please contact us to add your platform to the list of supported platforms.

matter.js employs [code generation approaches](./codegen) to ensure a comprehensive model of all Matter Clusters and (soon) device types. This includes typing and documentation, readily available within developers' IDEs, facilitating easy accessibility and adherence to conformance information during coding. This approach allows for easy addition of new clusters and device types, ensuring synchronization with the Matter standard.

## What matter.js can be used for?

matter.js serves various purposes and can be employed for:

- **Developing Production-Ready Matter Devices or Bridges:**<br>Use JavaScript/TypeScript to create Matter devices or bridges for OS-based IoT products. The extensive typing information and documentation facilitate the easy implementation of required functionality while ensuring synchronization with the Matter specification. **If you plan to certify a device based on matter.js please see note below.**

- **Developing Matter Controllers:**<br>Develop Matter controllers with JavaScript/TypeScript for OS-based IoT products. Post-commissioning (including BLE support), controllers can access all data from devices and control them. The API supports development with known typings of all clusters when endpoints and device types are known during development. It also allows generic programmatic access to all clusters and attributes. Typing information of custom clusters can be added to the controller or accessed generically with generic data parsing support. **If you plan to build/certify a controller based on matter.js please see note below.**

- **Rapid Prototyping for Testing and Development:**<br>Enable rapid development of device or controller prototypes for testing and development purposes. JavaScript's nature and the convenient matter.js API make it easy to create prototypes. Testing different feature combinations or endpoint structures can be done quickly using JavaScript testing frameworks.

- **Developing Bridges Between Matter and Other Ecosystems:**<br>Implement bridges between Matter and other ecosystems using JavaScript. Utilize the many available JavaScript libraries to easily bridge between ecosystems. **If you plan to certify a bridged device based on matter.js please see note below.**

- **Using the Matter Shell Application as a Controller:**<br>Employ the Matter Shell application as a controller to interact with Matter devices via a CLI interface. Ideal for manual testing and development purposes.

Explore the versatile capabilities of matter.js and adapt it to your specific use cases!

### Note on Certification

If you plan to officially certify a device, bridge or controller based on matter.js please contact us via E-Mail or Discord to get the latest information of the certification status of matter.js, supported and not yet supported features and consulting on the certification process.

matter.js successfully passed certification already. There are still thinks to consider and to discuss when you plan to certify.

## Compatibility to Matter Standard

The Matter standard evolves continuously and delivers two updates per year. matter.js tries to follow the standard as closely as possible. The following list provides an overview which matter.js version is implementing which Matter standard version:
- **Matter 1.0**: matter.js up to 0.7.x
- **Matter 1.1**: matter.js 0.8.x - 0.9.x
- **Matter 1.2**: skipped
- **Matter 1.3**: matter.js 0.10.x and higher

## Compatibility to Ecosystems 

Devices created with matter.js/matter-node.js have been tested with:

- **Apple iOS (iPhone or iPad) and tvOS 16 (Apple TV) - "Home" app by Apple**: Fully working
- **Google Home Ecosystem (Android or Google Nest smart speakers/display) - "Google Home" app**: Fully working
- **Amazon Alexa (Amazon Echo smart speakers/displays)** : Fully working
- **Tuya Smart (SmartLife) app**: Fully working
- **Samsung SmartThings (Station or Hub v2 and later)**: Fully working
- **LG ThinQ**: Fully working, beside glitches in LG software sometimes
- **Home Assistant - Matter integration**: Fully working
- **Aqara Hub M3**: Aqara currently seem to not allow to pair test devices, so matter.js open source devices are not working with Aqara Hub M3. Please contact Aqara and request this feature.
- **Yandex Smart Home**: Yandex currently seem to not allow to pair test devices, so matter.js open source devices are not working with Yandex SMart Home. Please contact Yandex and request this feature.
- **flic**: Fully working

Matter.js based projects show up as "uncertified test devices" in the ecosystems. This is because the devices are not certified by the Connectivity Standards Alliance (CSA) and are not part of the official Matter certification program. However, the devices are fully functional and can be used in the ecosystems. The ecosystems usually inform the user about the uncertified status of the device. Please see [Pairing and Usage Information](./docs/ECOSYSTEMS.md##pairing-and-usage-information) for more details.

We also collected a [list of tested device types on ecosystem](./docs/ECOSYSTEMS.md#device-types-tested-on-various-ecosystems).This is a compilation of published information by the ecosystems and own community tests.

Each ecosystem have their own specialities, see [Pairing and Usage Information](./docs/ECOSYSTEMS.md##pairing-and-usage-information) for more details.

When you plan to use matter.js as controller with Thread based devices please see [How to use Thread based devices with matter.js Controller/Shell](./docs/USAGE_THREAD.md) for more details.

We also collected some [Troubleshooting information](./docs/TROUBLESHOOTING.md) to help you with common issues.

A list ok known issues with some ecosystems can be found in [KNOWN_ISSUES.md](./docs/KNOWN_ISSUES.md).

matter.js/matter-node.js as Controller was successfully tested with Chip example apps and several production devices (see [here](https://github.com/project-chip/matter.js/discussions/316) ).

Please report any outdated or newly discovered information on compatible ecosystems, devices, and device types or issues.

## Monorepo Code structure Overview

This repository contains multiple packages (and because of this it is a monorepo). The packages are contained in the `packages` directory and are all published separately to NPM.

- **[matter.js](./packages/matter.js)**: the core Matter implementation in typescript which is JavaScript only and has no native dependencies. It is build and published as CommonJS and ES6 variants in one package.
- **[matter-node.js](./packages/matter-node.js)**: Node.js specific platform implementations to enable running Matter devices or Controller with Node.js. This package is build and published as CommonJS and ES6 variants in one package and meant to be used together with the matter.js package.
- **[matter-node-ble.js](./packages/matter-node-ble.js)**: Node.js based implementation of BLE features for matter-node.js to allow commissioning via BLE (Device and Controller). It is build and published as CommonJS and ES6 variants in one package and meant to be used together with the matter.js and the matter-node.js package.
- **[matter-node-shell.js](./packages/matter-node-shell.js)**: a Node.js based Matter Shell script to allow to interact with Matter devices as controllers via a CLI interface running on Node.js.
- **[matter-node.js-examples](./packages/matter-node.js-examples)**: Reference implementations of several usage ready Matter devices and controller as CLI scripts running on Node.js.
- **[matter.js-react-native](./packages/matter.js-react-native)**: An implementation of the platform specific parts needed for matter.js using react-native.
- **[matter.js-tools](./packages/matter.js-tools)**: Tools used internally to build, test and run the project which incorporates on-the-fly Typescript building. You most likely do not need these tools for your projects but are free to use them.

For each package the [API Documentation](./docs/README.md) is updated on each official release, but can also be built locally using `npm run build-doc`.

Beside these packages that are published to npm there are also some packages that are not published to npm and exist as folders in the root directory:
- **[chip-testing](./chip-testing)**: A set of scripts to allow to run the Chip-Tool-Certification tests against a matter-node.js based devices. These tests are executed on GitHub CI automatically.
- **[codegen](./codegen)**: A set of scripts to generate code for the Matter code model, clusters and device types.
- **[model](./models)**: Contains all pre-parsed information for the Matter models used to generate code for the code model, clusters and device types. It also allows to define [local overrides](./models/src/local) to adjust incomplete or wrong information in the Matter models.

This repository uses the workspaces feature from npm to manage the dependencies between the packages. Because of this please only use `npm install` on the root of the repository. This will install all the dependencies for all the packages and also take care to create relevant symlinks between the packages.

Additionally, it uses typescript project references to allow IDE support for the dependencies. These dependencies need to be added to the tsconfig.json files if needed.

You can build and test the packages separately or all by using `npm run build` or `npm run test` on root package level. With `npm run build-clean` you can build all packages from scratch.

## Release tags

To allow a simple use of the matter.js Monorepo based project in other projects, we publish all packages separately to NPM. There are two available release tags on NPM:

- **latest**: This is the default NPM tag and contains official released versions of the packages. This is the recommended tag to use in your projects. Whenever we build a new official release also the docs are updated and available in the repository.
- **dev**: This tag contains a nightly build of the project and is updated every night if there were changes in the repository. This is only for testing and development purposes and should not be used for real production use cases. Use e.g. `npm install @project-chip/matter-node.js@dev` to install the latest nightly build of matter-node.js.

## Community communication

If you have issues please use the GitHub "[Issues](https://github.com/project-chip/matter.js/issues)" of this repository. For questions or idea discussions please use the "[Discussions](https://github.com/project-chip/matter.js/discussions)" in this GitHub repository.

Additionally, we started a Discord server for Matter-Integrators to allow to communicate about the protocol and how to implement Matter in various environments (not only just JavaScript/Typescript). You can join it here: https://discord.gg/ujmRNrhDuW .

## How to use matter.js

### To develop matter.js

If you like to develop matter.js itself or want to contribute to it, you can use the following commands:

```bash
git clone https://github.com/project-chip/matter.js
cd matter.js
npm install
```

This will install all dependencies and create symlinks between the packages, so that it can be used locally. It also builds all packages.

On Windows in order to successfully build all the packages (tested on Windows 11 Pro) make sure that to have installed Node.js 18+, the windows-build-tools and node-gyp version 10.
On Non-Windows platforms and having Python 3.12+ installed please also make sure to use npm 10.2.3+.

### To use matter(-node).js in own projects

To use matter.js in own projects you simply use matter-node.js as dependency in your project. This package also re-exports all interfaces from matter.js, so it is not needed to use matter.js directly. If you need BLE support you can use matter-node-ble.js as additional dependency.

```bash
npm install @project-chip/matter-node.js --save
```

If your project is not based on Node.js you need to implement the platform specific parts. See [How to use matter.js in own projects](#how-to-use-matterjs-in-own-projects) for more details.

### To try out the Node.js based Examples

if you just want to try out the Node.js based examples you can use the following commands:

```bash
npm install @project-chip/matter-node.js-examples
```

Please refer to the Examples Readme on how to use the examples: [matter-node.js-examples](packages/matter-node.js-examples/README.md)

## Code style

matter.js relies very much on TypeScript and tries to be as type safe as possible. Please prevent using ts-ignore or other "hacks" as best as possible and try to find and fix the real typing issue if you encounter cases where you need to use them. YOu can also alwayys join discord or as in GitHub discussions if you need help.

The project contains eslint as linter and prettier as formatter. The configuration files are located in the root directory and are valid for all packages.

The following commands are available:

- `npm run lint`: runs eslint on all packages and outputs the results and errors
- `npm run lint-fix`: runs eslint on all packages and tries to fix the errors
- `npm run format`: runs typescript-formatter on all packages and formats the code. Files will be changed in place.
- `npm run format-verify`: runs typescript-formatter on all packages and checks if the code is formatted correctly. If not it will output the files that need to be formatted.

If you want to contribute to the project please make sure to check linting and formatting before creating a PR. The GitHub CI also verifies this and will fail if the code is not formatted correctly.

## Building

You can use `npm run build` on the root level to build all packages in an incremental way. This will only build the changed files.

You can use `npm run build-clean` on the root level to build all packages from scratch.

## Tests

You can use `npm run test` on the root level to run all tests for all packages.

Special testing using the Chip-Tool-Certification tests is available in the package matter-node.js-examples. Please refer to the [README.md](packages/matter-node.js/README.md#chip-tool-certification-testing) in the package for more details.

## API documentation

You can use `npm run build-doc` on the root level to generate the API documentation for all packages in directory doc.

## Current status

We are about to complete the basic certifiable feature set. Right now in the low level APIs all clusters are supported and all kind of devices can be built, but not with pre-defined cluster logic.
See the [Roadmap](https://github.com/orgs/project-chip/projects/11/views/1) for status and next planned steps.

## How to use matter.js in own projects

matter.js itself cannot be used directly in a project because some platform specific functionalities needs to be added. These are:

- **BigInt/UInt8Array**: Right now matter.js relies on certain ES6 JavaScript language features like BigInt and UInt8Array. If your platform does not support this you need to add a polyfill for this.
- **Network**: The Network implementation needs to provide UDP server and client functionality. This is a core requirement. The [Network Interface](packages/matter.js/src/net/Network.ts) needs to be implemented which includes methods to query network interfaces of the system and to use UDP sockets.
- **Crypto**: Until we have a pure JavaScript implementation of the required crypto functions, a native implementation is needed. The [Crypto Interface](packages/matter.js/src/crypto/Crypto.ts) needs to be implemented which includes methods to generate random numbers, generate keys and to encrypt/decrypt data with various algorithms.
- **Storage**: The Storage implementation needs to provide a way to store and retrieve data, easiest in a key-value form. The [Storage Interface](packages/matter.js/src/storage/Storage.ts) needs to be implemented which includes methods to store and retrieve data.
- **Time**: The Time implementation needs to provide a way to get the current time in milliseconds, but mainly need to offer Timer functionalities (Interval and Singe timers). The [Time Interface](packages/matter.js/src/time/Time.ts) needs to be implemented which includes methods to get the current time in milliseconds. 
- **BLE**: If your implementation is not Ethernet based or Pre-Connected to an IP network you need to provide a BLE implementation. The [BLE Interface](packages/matter.js/src/ble/Ble.ts) needs to be implemented which includes methods to start and stop BLE advertising and to connect to a BLE device. Depending on if you implement a Controller or Device you need to implement the Peripheral and Broadcaster (Device) or Central and Scanner (Controller) BLE interfaces. **For a device the platform you implement needs to allow to send custom "Manufacturer data" in the BLE advertising packet!**
- **Wi-Fi/Thread Commissioning**: If you want to implement a Device which is not Ethernet based you need to provide a Wifi or Thread Commissioning implementation. This needs to include methods to scan for networks, configure the device for a network and to connect to a network. The implementation in this case needs to provide the functionality as command handlers for a WifiNetworkCommissioning- or a ThreadNetworkCommissioning-Cluster.
- **Intl**: For some Internationalization features (getting locale or calendar type) the Intl API is used. If your platform does not support this you need to add a polyfill for this.

The following reference implementation and code references are available as basis for own platform implementations:

- For Network, Crypto, Storage and Time functionality you can use the Node.js implementations provided by [matter-node.js](packages/matter-node.js/README.md) as reference. 
- For BLE functionality you can use the Node.js implementations provided by [matter-node-ble.js](packages/matter-node-ble.js/README.md) as reference. 
- For Wi-Fi/Thread Commissioning functionality you can use the [Node.js DeviceNode example script](packages/matter-node.js-examples/src/examples/cluster/DummyWifiNetworkCommissioningServerLegacy.ts) which contains a static "testing only" (but API complete for Wifi) reference.

If you implement a specific platform we would be happy about a PR with the code, so that also other community members can benefit from it.

## matter.js based projects

If you use a platform where Node.js 18+ is available then you can easily and directly use the following project that base on matter.js

matter.js is used at the core of those two projects currently:

- [matter-node.js](packages/matter-node.js/README.md): a Matter client / server running on node.js compatible with HA (Android / iOs support in progress)
- [matter-node-shell.js](packages/matter-node-shell.js/README.md): a Matter Shell script to allow to interact with Matter devices as controllers via a CLI interface
- [node-red-matter](https://github.com/FezVrasta/node-red-matter): a Node-Red Node for devices and controllers
- [zigbee-matter-bridge](https://github.com/antonio-gabriele/zigbee-matter-bridge): a Zigbee to Matter Bridge
- [matterbridge](https://github.com/Luligu/matterbridge): a matter.js plugin manager with 7 example plugins
  - [matterbridge-zigbee2mqtt](https://github.com/Luligu/matterbridge-zigbee2mqtt): a matterbridge production-level plugin that expose all zigbee2mqtt devices and groups to Matter
  - [matterbridge-somfy-tahoma](https://github.com/Luligu/matterbridge-somfy-tahoma): a matterbridge production-level plugin that expose all somfy tahoma screens to Matter
  - ... and more
