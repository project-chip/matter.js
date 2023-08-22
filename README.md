# JavaScript/TypeScript based Matter Implementation

[![license](https://img.shields.io/badge/license-Apache2-green.svg)](https://raw.githubusercontent.com/project-chip/matter.js/master/LICENSE)

Implementation of Matter protocol in Typescript with no native dependencies (and very limited dependencies).

Matter is a new secure / reliable / local / standard protocol for smart devices launched at the end of 2022.
To know more about Matter: https://csa-iot.org/all-solutions/matter/

## Compatibility
Devices created with matter.js/matter-node.js are compatible with:
- **Apple iOS (iPhone or iPad) and tvOS 16 (Apple TV) - "Home" app by Apple**: fully working
- **Google Home Ecosystem (Android or Google Nest smart speakers/display) - "Google Home" app**: fully working
- **Amazon Alexa (Amazon Echo smart speakers/displays)** : fully working
- **Tuya Smart (SmartLife) app**: fully working
- **Samsung SmartThings (Station or Hub v2 and later)**: pairing works, but for controlling seems like Smartthings implementation itself has issues
- **Home Assistant - Matter integration**: fully working

We also collected a [list of known device types supported by which ecosystem](#Device-types-supported-by-Ecosystems).This is a compilation of published information and own community tests.

Each ecosystem have their own specialities, see [Pairing and Usage Information](#Pairing-and-Usage-Information) for more details.

A list ok known issues with some ecosystems can be found in [KNOWN_ISSUES.md](KNOWN_ISSUES.md).

matter.js/matter-node.js as Controller was successfully tested with the following devices:
* Eve Energy (paired as secondary Controller via Apple Hub and also into own Thread network directly)
* TP-Link P-125M (US) Smart Plug (paired as secondary Controller via Apple Hub and also into own Wi-Fi network directly)
* Meross MSS115 (US) Smart Plug (paired as secondary Controller via Apple Hub and also into own Wi-Fi network directly)
* Chip-Tool

## Monorepo Overview

This repository contains multiple packages (and because of this it is a monorepo). The packages are contained in the `packages` directory and are all published separately to NPM.

* **matter.js**: the core Matter implementation in typescript which is JavaScript only and has no native dependencies.
* **matter-node.js**: a node.js implementation of a Matter DeviceNode and ControllerNode which also re-exports all matter.js exports and so can be used as only dependency
* **matter-node-ble.js**: a node.js based implementation of BLE features for matter-node.js to allow commissioning via BLE (Device and Controller)
* **matter-node-shell.js**: a node.js based Matter Shell script to allow to interact with Matter devices as controllers via a CLI interface
* **matter-node.js-examples**: Reference implementations of Matter devices and controller as CLI scripts using matter-node.js and matter-node-ble.js

For each package the [API Documentation](./docs/README.md) is updated on each release, but can be built locally using `npm run build-doc`.

This repository uses the workspaces feature on npm to manage the dependencies between the packages. Because of this please only use `npm install` on the root of the repository. This will install all the dependencies for all the packages and also take care to create relevant symlinks between the packages.

Additionally, it uses typescript project references to allow IDE support for the dependencies. These dependencies need to be added to the tsconfig.json files if needed.

You can build and test the packages separately or all by using `npm run build` or `npm run test` on root package level. With `npm run build-clean` you can build all packages from scratch.

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

* `npm run lint`: runs eslint on all packages and outputs the results and errors
* `npm run lint-fix`: runs eslint on all packages and tries to fix the errors
* `npm run format`: runs typescript-formatter on all packages and formats the code. Files will be changed in place.
* `npm run format-check`: runs typescript-formatter on all packages and checks if the code is formatted correctly. If not it will output the files that need to be formatted.

## Building

You can use `npm run build` on the root level to build all packages in an incremental way. This will only build the changed files.

You can use `npm run build-clean` on the root level to build all packages from scratch.

## Tests

You can use `npm run test` on the root level to run all tests for all packages.

Special testing using the Chip-Tool-Certification tests is available in the package matter-node.js-examples. Please refer to the [README.md](packages/matter-node.js/README.md#chip-tool-certification-testing) in the package for more details.

## API documentation

You can use `npm run build-doc` on the root level to generate the API documentation for all packages in directory doc.

## Current status

This is work in progress.

Completed implementations:
- [X] TLV codec (coder/decoder) and schema mapping and validation engine
- [X] 12 cluster definitions (including TLV structures for all messages)

## matter.js usage

matter.js is used at the core of those two projects currently:
* [matternode](https://github.com/project-chip/matternode): a light-weight node.js implementation of a Matter Node
* [matter-node.js](packages/matter-node.js/README.md): a Matter client / server running on node.js compatible with HA (Android / iOs support in progress)

## Device types supported by Ecosystems

This list is a compilation of published information and own community tests. Many updates in the ecosystems happen without big announcements, so the information here can be a bit outdated and more device types are supported. If you find errors or added device types please open a PR or issue to report them. Especially for SmartThings and Tuya no information is officially published. 

Table Legend:
* "X" means supported
* "-" means not supported from current knowledge
* "?" means unknown

| Device type                       | Apple | Google        | Amazon | SmartThings | Tuya |
|-----------------------------------|-------|---------------|--------|-------------|------|
| **Bridge Support**                | X     | X             | X      | -           | -    |
| **Light devices**                 |       |               |        |             |      |
| * On/Off Light                    | X     | X             | X      | X           | X    |
| * Dimmable Light                  | X     | X             | X      | X           | X    |
| * Color Temperature Light         | X     | X             | X      | X           | X    |
| * Extended Color Light            | X     | X             | X      | ?           | ?    |
| **Smart Plugs/Outlets/Actuators** |       |               |        |             |      |
| * On/Off Plug-in Unit             | X     | X             | X      | X           | X    |
| * Dimmable Plug-in Unit           | ?     | ?             | ?      | ?           | ?    |
| * Pump                            | -     | -             | -      | -           | -    |
| **Sensors**                       |       |               |        |             |      |
| * Contact Sensor                  | X     | X             | X      | X           | ?    |
| * Light Sensor                    | X     | X             | -      | X           | ?    |
| * Occupancy Sensor                | X     | X             | -      | ?           | ?    |
| * Temperature Sensor              | X     | X             | -      | X           | ?    |
| * Pressure Sensor                 | -     | X             | -      | ?           | ?    |
| * Flow Sensor                     | -     | X             | -      | X           | ?    |
| * Humidity Sensor                 | X     | X             | -      | X           | ?    |
| * On/Off Sensor                   | ?     | ?             | ?      | ?           | ?    |
| **Closure Devices**               |       |               |        |             |      |
| * Door Lock                       | -     | X             | X      | ?           | ?    |
| * Window Covering                 | X     | X (Lift only) | -      | ?           | ?    |
| **HVAC Devices**                  |       |               |        |             |      |
| * Heating/Cooling-Unit            | -     | -             | -      | -           | ?    |
| * Thermostat                      | X     | X             | X      | ?           | ?    |
| * Fan                             | -     | -             | -      | -           | ?    |
| **Media Devices**                 |       |               |        |             |      |
| * Video Player Architecture       | -     | -             | -      | -           | -    |
| * Basic Video Player              | -     | -             | -      | -           | -    |
| * Casting Video Player            | -     | -             | -      | -           | -    |
| * Speaker                         |       | X             | -      | -           | -    |
| * Content App                     | -     | -             | -      | -           | -    |
| **Generic Devices**               |       |               |        |             |      |
| * Mode Select                     | -     | -             | X      | -           | -    |

## Pairing and Usage Information

It should work with any Matter-compatible home automation app when Matter will be released. We tested the Library with the "big" ones and can provide additional information.

A good guide with images on how to add devices to Alexa, Google and Apple in general is available in the [TP-Link FAQ](https://www.tp-link.com/de/support/faq/3564/).


### Apple iOS and tvOS Ecosystem

Minimum OS Required for iOS and tvOS devices: iOS 16.2 or later.

Apple [support to set up HomePod, HomePod mini, Apple TV, or iPad](https://support.apple.com/en-us/HT207057) (will not be supported anymore
with the new Home Architecture starting iOS 16.3!) as a Matter Hub. The pairing itself can also be done using an iPhone, but the later
controlling can only be done by one of the Hub options listed above!

When pairing with node-matter the Home app will ask you to allow to pair an "uncertified device"which you need to allow. After that the device
will be added to the Home app, and you can control it from there.

We currently have no information which device types are supported by the Home app. But Lights and Sockets are support in any case.

Apple is using "two fabric IDs" on the paired devices (all others only use one). This needs to be considered when planning to pair devices with
multiple controllers. How many fabrics are available depends on the device manufacturer (minimum are 3).

### Google Home Ecosystem

Minimum Version Required for the "Google Home" app：2.62.1.15 or later.

Also for Google you need to have a Hub device (Android or Google Nest smart speakers/display) out of the [list of supported devices](https://support.google.com/googlenest/answer/12391458?hl=en) to control your Matter devices.

Pairing is currently only possible using the Google Home Android App on Android 8.1 or higher. The iOS App is not supporting Matter yet.

Before you can pair node-matter to Google Home you need to allow uncertified devices for your Google Account. For this open the [Google
Developer Console to add an Integration](https://console.home.google.com/projects/) and [setup](https://developers.home.google.com/matter/get-started?hl=en&%3Bauthuser=0&authuser=0) the device there. Please use 0xFFF1 as Vendor ID
because node-matter uses this by the current scripts.
If you do this that pairing will not be possible!
If you have issues with pairing please refer to the [Troubleshootling pages](https://developers.home.google.com/matter/build/troubleshooting?hl=en#verify_your_google_play_services_gps_matter_modules) from Google.

Google supports several [Matter device types](https://developers.home.google.com/matter/supported-devices?authuser=0&hl=en) already.

### Amazon Alexa Ecosystem

Minimum Version Required for the "Amazon Alexa" app：2.2.491118.0 or later.

**Please note that because Alexa’s temporarily limited setting, Alexa ecosystem (Amazon Echo smart speakers/displays) needs to be paired with Matter-certified device as the first ecosystem. If you are unsure, please factory default your device before setup.**

For Amazon Alexa Usage you also need one [Alexa device as Matter hub](https://www.amazon.com/b?ie=UTF8&node=37490568011) in your local network.

Pairing is currently only possible using the Alexa Android App on Android 8.1 or higher. The iOS App is not supporting Matter yet.

For Alexa no special setup is needed to pair node-matter as development device.

The [list of supported device types](https://developer.amazon.com/en-US/docs/alexa/smarthome/matter-support.html#device-categories-and-clusters)
is basic currently, but will get enhanced in the future.

### Tuya Smart (SmartLife) Ecosystem

Should work but no more detatailed information here as of yet.

### Samsung SmartThings Ecosystem

Samsung is building its SmartThings hub software into 2022 Samsung Smart TVs, Smart Monitors, and Family Hub refrigerators, allowing them to
control Matter smart home devices. Currently, Samsung SmartThings Station or Samsung SmartThings Hub v2 and later are needed as a hub for Matter.

* Samsung "Samsung SmartThings Station" does support Matter devices over LAN, Wi-Fi, and over Thread radio (Thread Border Router).
* "Aeotec Smart Home Hub" (rebranded Samsung SmartThings Hub v3) will be getting an update to supports Matter over Wi-Fi.
* "Samsung SmartThings Hub v3" (ETH-ETH-300 from 2018) has been updated to support Matter over Wi-Fi.
* "Samsung SmartThings Hub v2" (ETH-ETH-250 from 2016) has been updated to support Matter over Wi-Fi.
* "Samsung SmartThings Hub v2" (ETH-ETH-200 from 2015) has been updated to support Matter over Wi-Fi.
* "SmartThings Family Hub" smart fridge might or might not get updated to support Matter at a later date.
* "SmartThings Hub v1" (F-H-ETH-001 and STH-ETH-001) has been discontinued and will not get updated to support Matter.
* "Samsung SmartThings Link" (USB dongle) for Nvidia Shield has been discontinued and will not get updated to support Matter.

Note! Samsung has started that they do not plan on bridging Zigbee and Z-Wave devices connected to their hubs with Matter (e.i. no protocol bridge so far).

### Home Assistant - Matter integration

Home Assistant's official Matter integration is in Beta-stage however it is fully working and compatible with the Matter 1.0 standard. To connect Thread based devices you also need an Thread Border Router radio that is compatible with Home Assistant's official Thread integration, that includes their official Home Assistant Yellow hub and their Home Assistant SkyConnect Zigbee/Thread USB dongle.

* https://www.home-assistant.io/integrations/matter/
* https://www.home-assistant.io/integrations/thread/

### chip-tool

Compile chip-tool from [project-chip](https://github.com/project-chip/connectedhomeip/tree/c438b8945e26a84f68ba3608de202e4b939a9080/examples/chip-tool)

**Provisioning the device**:

```
chip-tool pairing onnetwork 222 20202021
```

**Controlling the device**:

```
chip-tool onoff toggle 222 1
```

**Clearing the data**:

```
chip-tool pairing unpair 222
and/or
chip-tool storage clear-all
```

### Android mobile app

You can also control it with Matter test app: https://github.com/project-chip/connectedhomeip/tree/master/src/android/CHIPTest
You can find a compiled apk in /matter-test-apk in this repository.

**Provisioning the device**: click "provision with WiFi" > "Input DeviceNode address" > type IP address of the machine running node-matter

**Controlling the device**: click "Light on/of" and you can control the light

## FAQ

### Why using node-matter instead of the official codebase?

Well, the original codebase is platform dependent, has finicky tool version requirements and is over 8GB with all dependencies.
This tool is less than 500kB and works on anything supporting node. Sure, it supports only the barebone Matter protocol for now.

### Can this work from a browser?

Not yet, but I know how to make it works with a few tricks.

### How can I have support for more clusters?

Adding more clusters should be pretty easy now the core protocol is working.
Have a look at the implementation of the OnOff cluster: pretty simple, right?

I am planning on adding more clusters, so stay tuned or pinged me to implement first the one you need.

### Contact the developers

For other questions, you can post a message on the github forum, open an issue, or join Discord https://discord.gg/ujmRNrhDuW .
