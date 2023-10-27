# JavaScript/TypeScript based Matter Implementation

[![license](https://img.shields.io/badge/license-Apache2-green.svg)](https://raw.githubusercontent.com/project-chip/matter.js/master/LICENSE)

Implementation of Matter protocol in Typescript.

Matter is a new secure / reliable / local / standard protocol for smart devices launched at the end of 2022.

To learn more about Matter you can learn more here: [https://csa-iot.org/all-solutions/matter/](https://csa-iot.org/all-solutions/matter/)

## Compatibility

Devices created with matter.js/matter-node.js have been tested with:

- **Apple iOS (iPhone or iPad) and tvOS 16 (Apple TV) - "Home" app by Apple**: Fully working
- **Google Home Ecosystem (Android or Google Nest smart speakers/display) - "Google Home" app**: Fully working
- **Amazon Alexa (Amazon Echo smart speakers/displays)** : Fully working
- **Tuya Smart (SmartLife) app**: Fully working
- **Samsung SmartThings (Station or Hub v2 and later)**: Pairing works, but for controlling seems like SmartThings implementation itself has issues
- **LG ThinQ**: Fully working
- **Home Assistant - Matter integration**: Fully working

We also collected a [list of tested device types on ecosystem](#device-types-tested-on-various-ecosystems).This is a compilation of published information and own community tests.

Each ecosystem have their own specialities, see [Pairing and Usage Information](#pairing-and-usage-information) for more details.

A list ok known issues with some ecosystems can be found in [KNOWN_ISSUES.md](KNOWN_ISSUES.md).

matter.js/matter-node.js as Controller was successfully tested with Chip example apps and several official production devices (see [here](https://github.com/project-chip/matter.js/discussions/316) ).

## Monorepo Overview

This repository contains multiple packages (and because of this it is a monorepo). The packages are contained in the `packages` directory and are all published separately to NPM.

- **matter.js**: the core Matter implementation in typescript which is JavaScript only and has no native dependencies.
- **matter-node.js**: a node.js implementation of a Matter DeviceNode and ControllerNode which also re-exports all matter.js exports and so can be used as only dependency
- **matter-node-ble.js**: a node.js based implementation of BLE features for matter-node.js to allow commissioning via BLE (Device and Controller)
- **matter-node-shell.js**: a node.js based Matter Shell script to allow to interact with Matter devices as controllers via a CLI interface
- **matter-node.js-examples**: Reference implementations of Matter devices and controller as CLI scripts using matter-node.js and matter-node-ble.js

For each package the [API Documentation](./docs/README.md) is updated on each release, but can be built locally using `npm run build-doc`.

This repository uses the workspaces feature on npm to manage the dependencies between the packages. Because of this please only use `npm install` on the root of the repository. This will install all the dependencies for all the packages and also take care to create relevant symlinks between the packages.

Additionally, it uses typescript project references to allow IDE support for the dependencies. These dependencies need to be added to the tsconfig.json files if needed.

You can build and test the packages separately or all by using `npm run build` or `npm run test` on root package level. With `npm run build-clean` you can build all packages from scratch.

## Releases

To allow a simple use of the matter.js Monorepo based project in other projects, we publish all packages separately to NPM. There are two available releases on NPM:

- **latest**: This is the default NPM tag and contains official released versions of the packages. This is the recommended tag to use in your projects. Whenever we build a new official release also the docs are updated and available in the repository.
- **dev**: This tag contains a nightly build of the project and is updated every night if there were changes in the repository. This is only for testing and development purposes and should not be used for real production use cases. Use e.g. `npm install @project-chip/matter-node.js@dev` to install the latest nightly build of matter-node.js.

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

Matter.js is the core implementation of the Matter protocol in typescript. It is a JavaScript only implementation and has no native dependencies. It is build and published as CommonJS and ES6 variants in one package.
For an overview of the exported functionality please refer to the [README.md](packages/matter.js/README.md#exported-functionality)

Because Matter required UDP/MDNS technologies, other implementations are needed to implement this core functionality platform specific.

For more Details see the [README.md](packages/matter.js/README.md) in the package.

### Matter-node.js

Matter-node.js uses Node.js to implement the platform specific parts using Node.js for networking and other needed native features. Additionally, it also implements a Matter DeviceNode and ControllerNode as a example implementation and allows to use this directly as CLI script.
For an overview of the exported functionality please refer to the [README.md](packages/matter.js/README.md#exported-functionality)

For more Details see the [README.md](packages/matter-node.js/README.md) in the package.

## Code style

The project contains eslint as linter and typescript-formatter as formatter. The configuration files are located in the root directory and are valid for all packages.

The following commands are available:

- `npm run lint`: runs eslint on all packages and outputs the results and errors
- `npm run lint-fix`: runs eslint on all packages and tries to fix the errors
- `npm run format`: runs typescript-formatter on all packages and formats the code. Files will be changed in place.
- `npm run format-check`: runs typescript-formatter on all packages and checks if the code is formatted correctly. If not it will output the files that need to be formatted.

## Building

You can use `npm run build` on the root level to build all packages in an incremental way. This will only build the changed files.

You can use `npm run build-clean` on the root level to build all packages from scratch.

## Tests

You can use `npm run test` on the root level to run all tests for all packages.

Special testing using the Chip-Tool-Certification tests is available in the package matter-node.js-examples. Please refer to the [README.md](packages/matter-node.js/README.md#chip-tool-certification-testing) in the package for more details.

## API documentation

You can use `npm run build-doc` on the root level to generate the API documentation for all packages in directory doc.

## Current status

We are about to complete the basic certifiable feature set. Right now in the low level APIs all clusters are supported and all kind of devices can be build, but not with pre-defined cluster logic.
See the [Roadmap](https://github.com/orgs/project-chip/projects/11/views/1) for status and next planned steps.

## How to use matter.js in own projects

matter.js itself can not be used directly in a project because some platform specific functionalities needs to be added. These are:

- **BigInt/UInt8Array**: Right now matter.js relies on certain ES6 JavaScript language features like BigInt and UInt8Array. If your platform does not support this you need to add a polyfill for this.
- **Network**: The Network implementation needs to provide UDP server and client functionality. This is a core requirement. The [Network Interface](packages/matter.js/src/net/Network.ts) needs to be implemented which includes methods to query network interfaces of the system and to use UDP sockets.
- **Crypto**: Until we have a pure JavaScript implementation of the required crypto functions, a native implementation is needed. The [Crypto Interface](packages/matter.js/src/crypto/Crypto.ts) needs to be implemented which includes methods to generate random numbers, generate keys and to encrypt/decrypt data with various algorithms.
- **Storage**: The Storage implementation needs to provide a way to store and retrieve data, easiest in a key-value form. The [Storage Interface](packages/matter.js/src/storage/Storage.ts) needs to be implemented which includes methods to store and retrieve data.
- **Time**: The Time implementation needs to provide a way to get the current time in milliseconds, but mainly need to offer Timer functionalities (Interval and Singe timers). The [Time Interface](packages/matter.js/src/time/Time.ts) needs to be implemented which includes methods to get the current time in milliseconds. 
- **BLE**: If your implementation is not Ethernet based or Pre-Connected to an IP network you need to provide a BLE implementation. The [BLE Interface](packages/matter.js/src/ble/Ble.ts) needs to be implemented which includes methods to start and stop BLE advertising and to connect to a BLE device. Depending on if you implement a Controller or Device you need to implement the Peripheral and Broadcaster (Device) or Central and Scanner (Controller) BLE interfaces. **For a device the platform you implement needs to allow to send custom "Manufacturer data" in the BLE advertising packet!**
- **Wi-Fi/Thread Commissioning**: If you want to implement a Device which is not Ethernet based you need to provide a Wifi or Thread Commissioning implementation. This needs to include methods to scan for networks, configure the device for a network and to connect to a network. The implementation in this case needs to provide the functionality as command handlers for a WifiNetworkCommissioning- or a ThreadNetworkCommissioning-Cluster.

The following reference implementation and code references are available as basis for own platform implementations:

- For Network, Crypto, Storage and Time functionality you can use the Node.js implementations provided by [matter-node.js](packages/matter-node.js/README.md) as reference. 
- For BLE functionality you can use the Node.js implementations provided by [matter-node-ble.js](packages/matter-node-ble.js/README.md) as reference. 
- For Wi-Fi/Thread Commissioning functionality you can use the [Node.js DeviceNode example script](packages/matter-node.js-examples/src/examples/cluster/DummyWifiNetworkCommissioningClusterServer.ts) which contains a static "testing only" (but API complete for Wifi) reference.

If you implement a specific platform we would be happy about aa PR with the code, so that also other community members can benefit from it.

## Node.js usage

If you use a platform where Node.js 16.x+ is available then you can easily and directly use the following project that base on matter.js

matter.js is used at the core of those two projects currently:

- [matternode](https://github.com/project-chip/matternode): a light-weight node.js implementation of a Matter Node
- [matter-node.js](packages/matter-node.js/README.md): a Matter client / server running on node.js compatible with HA (Android / iOs support in progress)
- [matter-node-shell.js](packages/matter-node-shell.js/README.md): a Matter Shell script to allow to interact with Matter devices as controllers via a CLI interface

## Device types tested on various Ecosystems

This list is a compilation of published information and own community tests. Many updates in the ecosystems happen without big announcements, so the information here can be a bit outdated and more device types are supported. If you find errors or added device types please open a PR or issue to report them. *Please note: The content of this table is collected from various public sources, our own experiments, and community feedback which mean it might be outdated or not accurate.*

Table Legend:

- "X" means supported
- "-" means not supported from current knowledge
- "?" means unknown

| Device type                       | Apple | Google        | Amazon | SmartThings | LG ThinQ | Tuya |
| --------------------------------- | ----- | ------------- | ------ | ----------- | -------- | ---- |
| **Bridge Support**                | X     | X             | X      | X           | -        | -    |
| **Composed Devices Support**      | X     | X             | -      | -           | -        | -    |
| **Light devices**                 |       |               |        |             |          |      |
| * On/Off Light                    | X     | X             | X      | X           | X        | X    |
| * Dimmable Light                  | X     | X             | X      | X           | -        | X    |
| * Color Temperature Light         | X     | X             | X      | X           | -        | X    |
| * Extended Color Light            | X     | X             | X      | ?           | -        | ?    |
| **Smart Plugs/Outlets/Actuators** |       |               |        |             |          |      |
| * On/Off Plug-in Unit             | X     | X             | X      | X           | X        | X    |
| * Dimmable Plug-in Unit           | ?     | ?             | ?      | ?           | -        | ?    |
| * Pump                            | -     | -             | -      | -           | -        | -    |
| **Sensors**                       |       |               |        |             |          |      |
| * Contact Sensor                  | X     | X             | X      | X           | ?        | ?    |
| * Light Sensor                    | X     | X             | -      | X           | ?        | ?    |
| * Occupancy Sensor                | X     | X             | -      | ?           | ?        | ?    |
| * Temperature Sensor              | X     | X             | -      | X           | ?        | ?    |
| * Pressure Sensor                 | -     | X             | -      | ?           | ?        | ?    |
| * Flow Sensor                     | -     | X             | -      | X           | ?        | ?    |
| * Humidity Sensor                 | X     | X             | -      | X           | ?        | ?    |
| * On/Off Sensor                   | ?     | ?             | ?      | ?           | ?        | ?    |
| **Closure Devices**               |       |               |        |             |          |      |
| * Door Lock                       | -     | X             | X      | ?           | ?        | ?    |
| * Window Covering                 | X     | X (Lift only) | -      | ?           | ?        | ?    |
| **HVAC Devices**                  |       |               |        |             |          |      |
| * Heating/Cooling-Unit            | -     | -             | -      | -           | ?        | ?    |
| * Thermostat                      | X     | X             | X      | ?           | ?        | ?    |
| * Fan                             | -     | -             | -      | -           | ?        | ?    |
| **Media Devices**                 |       |               |        |             |          |      |
| * Video Player Architecture       | -     | -             | -      | -           | ?        | -    |
| * Basic Video Player              | -     | -             | -      | -           | ?        | -    |
| * Casting Video Player            | -     | -             | -      | -           | ?        | -    |
| * Speaker                         |       | X             | -      | -           | ?        | -    |
| * Content App                     | -     | -             | -      | -           | ?        | -    |
| **Generic Devices**               |       |               |        |             |          |      |
| * Mode Select                     | -     | -             | X      | -           | ?        | -    |

## Pairing and Usage Information

It should work with any Matter-compatible home automation app when Matter will be released. We tested the Library with a few common ones and can provide additional information.

### Apple

Minimum OS Required for iOS and tvOS devices: iOS 16.2 or later.

Apple has two guides that can help you get setup:

- [Set up your HomePod, HomePod mini, Apple TV, or iPad as a home hub](https://support.apple.com/en-us/HT207057)
- [Pair and manage your Matter accessories](https://support.apple.com/en-asia/102135)

When pairing with matter.js the operating system will ask you to allow to pair an "uncertified device" which you need to allow. After that the device
will be added to the Home app, and you can control it from there.

### Google Home Ecosystem

Minimum Version Required for the "Google Home" app：2.62.1.15 or later.

Also for Google you need to have a Hub device (Android or Google Nest smart speakers/display) out of the [list of supported devices](https://support.google.com/googlenest/answer/12391458?hl=en) to control your Matter devices.

Before you can pair matter.js to Google Home you need to allow uncertified devices for your Google Account. For this open the [Google
Developer Console to add an Integration](https://console.home.google.com/projects/) and [setup](https://developers.home.google.com/matter/get-started?hl=en&%3Bauthuser=0&authuser=0) the device there. Please use 0xFFF1 as Vendor ID
because matter.js uses this by the current scripts.

If you have issues with pairing please refer to the [Troubleshootling pages](https://developers.home.google.com/matter/build/troubleshooting?hl=en#verify_your_google_play_services_gps_matter_modules) from Google.

Google supports several [Matter device types](https://developers.home.google.com/matter/supported-devices?authuser=0&hl=en) already.

### Amazon Alexa Ecosystem

Minimum Version Required for the "Amazon Alexa" app：2.2.491118.0 or later.

For Amazon Alexa Usage you also need one [Alexa device as Matter hub](https://www.amazon.com/b?ie=UTF8&node=37490568011) in your local network.

For Alexa no special setup is needed to pair with matter.js as development device.

The [list of supported device types](https://developer.amazon.com/en-US/docs/alexa/smarthome/matter-support.html#device-categories-and-clusters) is basic currently, but will get enhanced in the future.

Alexa currently has a few non-standard requirements:

- Matter devices need to use port 5540 only, else they will not be discovered by Alexa at all
- The device needs to have an Endpoint 1 beside the root endpoint. This needs to either be the main device endpoint 
- (composed devices not yet supported) or an aggregator.

### Tuya Smart (SmartLife) Ecosystem

Should work but no more detatailed information here as of yet.

### Samsung SmartThings Ecosystem

Samsung is building its SmartThings hub software into 2022 Samsung Smart TVs, Smart Monitors, and Family Hub refrigerators, allowing them to
control Matter smart home devices. Currently, Samsung SmartThings Station or Samsung SmartThings Hub v2 and later are needed as a hub for Matter.

- Samsung "Samsung SmartThings Station" does support Matter devices over LAN, Wi-Fi, and over Thread radio (Thread Border Router).
- "Aeotec Smart Home Hub" (rebranded Samsung SmartThings Hub v3) will be getting an update to supports Matter over Wi-Fi.
- "Samsung SmartThings Hub v3" (ETH-ETH-300 from 2018) has been updated to support Matter over Wi-Fi.
- "Samsung SmartThings Hub v2" (ETH-ETH-250 from 2016) has been updated to support Matter over Wi-Fi.
- "Samsung SmartThings Hub v2" (ETH-ETH-200 from 2015) has been updated to support Matter over Wi-Fi.
- "SmartThings Family Hub" smart fridge might or might not get updated to support Matter at a later date.
- "SmartThings Hub v1" (F-H-ETH-001 and STH-ETH-001) has been discontinued and will not get updated to support Matter.
- "Samsung SmartThings Link" (USB dongle) for Nvidia Shield has been discontinued and will not get updated to support Matter.

### Home Assistant - Matter integration

Home Assistant's official Matter integration is in Beta-stage however it is fully working and compatible with the Matter 1.0 standard. To connect Thread based devices you also need an Thread Border Router radio that is compatible with Home Assistant's official Thread integration, that includes their official Home Assistant Yellow hub and their Home Assistant SkyConnect Zigbee/Thread USB dongle.

- [https://www.home-assistant.io/integrations/matter/](https://www.home-assistant.io/integrations/matter/)
- [https://www.home-assistant.io/integrations/thread/](https://www.home-assistant.io/integrations/thread/)

### chip-tool

Compile chip-tool from [project-chip](https://github.com/project-chip/connectedhomeip/tree/c438b8945e26a84f68ba3608de202e4b939a9080/examples/chip-tool)

**Provisioning the device**:

``` bash
chip-tool pairing onnetwork 222 20202021
```

**Controlling the device**:

``` bash
chip-tool onoff toggle 222 1
```

**Clearing the data**:

``` bash
chip-tool pairing unpair 222
```

*and/or*

``` bash
chip-tool storage clear-all
```

### Android mobile app

You can also control it with Matter test app: https://github.com/project-chip/connectedhomeip/tree/master/src/android/CHIPTest
You can find a compiled apk in /matter-test-apk in this repository.

**Provisioning the device**: click "provision with WiFi" > "Input DeviceNode address" > type IP address of the machine running matter.js

**Controlling the device**: click "Light on/of" and you can control the light

## FAQ

### How can I have support for more clusters?

Adding more clusters should be pretty easy now the core protocol is working.
Have a look at the implementation of the OnOff cluster: pretty simple, right?

We are planning on adding more clusters, so stay tuned, or please file issues about the ones that are higher priority.

### Contact the developers

For other questions, you can post a message on the github forum, open an issue, or join our Discord [https://discord.gg/ujmRNrhDuW](https://discord.gg/ujmRNrhDuW).
