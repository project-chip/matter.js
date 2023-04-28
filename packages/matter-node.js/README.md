# matter-node.js

[![license](https://img.shields.io/badge/license-Apache2-green.svg?style=flat)](https://raw.githubusercontent.com/mfucci/node-matter/master/LICENSE) 

Matter protocol for node.js with no native dependencies (and very limited dependencies).

> This package requires Node 16+ for the required Crypto primitives

This package can be used in two ways:
* As library as basis for Node.js based implementation of Matter Device and controller functionality
* As a basic CLI reference implementation of a Matter Device and Controller (might be split in own package soon)

For questions on how to use or pair Matter devices or controllers please refer to the [base package Readme](../../README.md#pairing-and-usage-information)! Especially for Google special steps are needed and mostly Hub devices are needed.

## Using as Library

## Exported functionality
This library enhances Matter.js and implements the needed native functionality using Node.js 16+ as platform. The library exports the added Node.js specific implementations and also the core Matter protocol functionality as well as some helper functions as named exports.
Because of this the library can be used as only dependency which makes sure the correct matter.js version is used.

### Node.js native enhanced exports

| Export                                 | Description                                                                                         |
|----------------------------------------|-----------------------------------------------------------------------------------------------------|
| `@project-chip/matter-node.js/crypto`  | Exports Crypto base functionality and Node.js specific implementation                               |
| `@project-chip/matter-node.js/net`     | Exports network base functionality and Node.js specific implementation                              |
| `@project-chip/matter-node.js/storage` | Exports storage base functionality and Node.js specific implementation of a directory based storage |
| `@project-chip/matter-node.js/time`    | Exports Time/Timer base functionality and Node.js specific implementation                           |
| `@project-chip/matter-node.js/util`    | Exports Basic Utility functionality and enhance it by adding some Node.js specific functionality    |

### Unchanged Re-Exports from Matter.js

| Export                                       | Description                                                                                                                                 |
|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| `@project-chip/matter-node.js`               | Re-Exports the current (legacy!) low level API to implement a Device or a Controller. This will be replaced soon by the new High Level API! |
| `@project-chip/matter-node.js/certificate`   | Re-Exports Certificate (Root-/PAA/PAI/IAC/DA-Certificates) related functionality                                                            |
| `@project-chip/matter-node.js/cluster`       | Re-Exports Matter CLuster definitions and Default Cluster-Handlers                                                                          |
| `@project-chip/matter-node.js/codec`         | Re-Exports Codecs for e.g. Matter-Messages                                                                                                  |
| `@project-chip/matter-node.js/common`        | Re-Exports certain common functionalities                                                                                                   |
| `@project-chip/matter-node.js/datatype`      | Re-Exports Matter Data types                                                                                                                |
| `@project-chip/matter-node.js/fabric`        | Re-Exports Matter-Fabric functionality                                                                                                      |
| `@project-chip/matter-node.js/interaction`   | Re-Exports Matter Interaction protocol functionality                                                                                        |
| `@project-chip/matter-node.js/log`           | Re-Exports Logging functionality (based on "console")                                                                                       |
| `@project-chip/matter-node.js/math`          | Re-Exports Math functionality used by Matter                                                                                                |
| `@project-chip/matter-node.js/mdns`          | Re-Exports Basic MDNS functionality (uses Network implementation)                                                                           |
| `@project-chip/matter-node.js/protocol`      | Re-Exports Basic Matter protocol functionality                                                                                              |
| `@project-chip/matter-node.js/schema`        | Re-Exports Schema definitions and functionality                                                                                             |
| `@project-chip/matter-node.js/securechannel` | Re-Exports Secure Channel functionality                                                                                                     |
| `@project-chip/matter-node.js/session`       | Re-Exports Session and Secure-Session functionality                                                                                         |
| `@project-chip/matter-node.js/spec`          | Re-Exports Matter Specification References                                                                                                  |
| `@project-chip/matter-node.js/tlv`           | Re-Exports Matter TLV type definitions                                                                                                      |
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

## Use as CLI

### Installation

#### From NPM

```bash
npm i -g @project-chip/matter-node.js
```

### Use from Cloned Matter.js Repository

When you clone the matter.js repository you can also use matter-node.js. To do this you need to execute `npm install`in the matter.js root directory once to install all dependencies and build all packages.

Then after `cd packages/matter-node.js` you can use `npm run matter` to run the matter-node.js server. Please see the next section for more details.

## Usage

### Start a Matter DeviceNode

To run from the build files:

```bash
matter
```

To run directly from Typescript files with on the fly compilation:

```bash
npm run matter
```

This starts a Matter (DeviceNode) server listening on port 5540.

This first version only includes the OnOff cluster (on/off smart thing, like a plug or a bulb).
You can use -on and -off parameter to run a script to control something.
For instance, on a Raspberry Pi, this will turn on / off the red LED:

```bash
matter -on "echo 255 > /sys/class/leds/led1/brightness" -off "echo 0 > /sys/class/leds/led1/brightness"
```

or when starting from TS files:

```bash
npm run matter -- -on "echo 255 > /sys/class/leds/led1/brightness" -off "echo 0 > /sys/class/leds/led1/brightness"
```
(Please note the "--" to separate commandline parameters between the npm run and the executed script. 

The following parameters are available:
* -passcode: the passcode to use for pairing (default: 20202021)
* -discriminator: the discriminator to use for pairing (default: 3840)
* -vendorid: the vendor ID as number to use for pairing (default: 65521 (0xFFF1))
* -productid: the product ID as number to use for pairing (default: 32768 (0x8000))
* -announceinterface: limit mdns announcements to the provided network interface, e.g. "en0" (default: all interfaces available)
* -port: the port to listen on for the device (default: 5540)
* -store: the storage location (directory) to use for storing the pairing information (default: device-node). Delete the directory or provide an alternative name to reset the device
* -on: the command to run when the device is turned on (see example above)
* -off: the command to run when the device is turned off (see example above)

#### Start a Matter ControllerNode

**Experimental**
The current controller implementation is no CLI tool, but shows the pairing of devices and resuming the connection and also showcase the existing low-level controller API. It is just intended to be used for debugging, during development! The code contains some commented-out examples of how to use the low level controller API.
Please **do not** use this for production, we will replace the API soon!

The controller currently is not discovering the device to pair, but directly connects to the IP/port defined bin the command line parameters.

To run from the build files:

```bash
matter-controller -ip [IP address of device to commission]
```

To run directly from Typescript files with on the fly compilation:

```bash
npm run matter-controller -- -ip [IP address of device to commission]
```

This will commission a Matter device (for debugging purpose only for now).

The following parameters are available:
* -ip: the IP address of the device to commission
* -discriminator: the discriminator to use for pairing (default: 3840)
* -pin: the pin to use for pairing (default: 20202021)
* -store: the storage location (directory) to use for storing the pairing information (default: controller-node). Delete the directory or provide an alternative name to reset the controller

## Modifying the server (DeviceNode) behavior

DeviceNode.ts defines the server behavior. You can add / remove clusters, change default parameters, etc...

```typescript
new MatterDevice()
    .addChannel(new UdpChannel(5540))
    .addProtocolHandler(Protocol.SECURE_CHANNEL, new SecureChannelHandler(
            new PasePairing(20202021, { iteration: 1000, salt: Crypto.getRandomData(32) }),
            new CasePairing(),
        ))
    .addProtocolHandler(Protocol.INTERACTION_MODEL, new InteractionProtocol(new DeviceNode([
        new Endpoint(0x00, "MA-rootdevice", [
            new BasicInformationCluster({ vendorName: "node-matter", vendorId: 0xFFF1, productName: "Matter test device", productId: 0X8001 }),
            new GeneralCommissioningCluster(),
            new OperationalCredentialsCluster(),
        ]),
        new Endpoint(0x01, "MA-OnOff", [
                new OnOffCluster(executor("on"), executor("off")),
        ]),
    ])))
    .start()
```

## Building

* `npm run build`: Build all code and create CommonJS and ES6 variants in dist directory. This will built incrementally and only build the changed files.
* `npm run build-clean`: Clean the dist directory and build all code from scratch

## Testing

* `npm run test`: Run all tests
