# matter-node.js-examples

[![license](https://img.shields.io/badge/license-Apache2-green.svg?style=flat)](https://raw.githubusercontent.com/mfucci/node-matter/master/LICENSE)

This project provides a set of reference implementations to offer several types of Matter device nodes or also a controller.

> This package requires Node 16+ for the required Crypto primitives

# matter-node.js Usage examples / Reference implementations

To better show how to use the library we provide some reference implementations in the examples directory. They are usable as CLI scripts without changes in the first place but are very simple. They are meant to be used as a starting point for your own implementation, or to experiment with Matter at all in a first place.

For BLE usage please also see the [matter-node-ble.js README.md](../matter-node-ble.js/README.md)  for prerequisites and limitations!

## Installation

### From NPM

```bash
npm i -g @project-chip/matter-node.js-examples
```

### Use from Cloned MatterServer.js Repository

When you clone the matter.js repository you can also use matter-node.js. To do this you need to execute `npm install` in the matter.js root directory once to install all dependencies and build all packages.

Then after `cd packages/matter-node.js-examples` you can use `npm run matter-device` to run the matter-node.js server. Please see the next section for more details.

## CLI usage

### Common CLI parameter for all examples
The following CLI parameters are the same for all examples:

* -clearstorage: the storage location will be reset on start of the process. The sorage location is set via parameter "-store" (see concrete examples below)
* -loglevel: the log level to use (default: debug, possible values: fatal, error, warn, info, debug)
* -logformat: the log format to use (default: ansi (if executed in a shell/tty), else plain, possible values: ansi, plain, html)

### Start a simple Matter Device Node

> The code for this example is in [src/examples/DeviceNode.ts](./src/examples/DeviceNode.ts).

To run from the build files:

```bash
matter-device
```

To run directly from Typescript files with on the fly compilation:

```bash
npm run matter-device
```

This starts a MatterServer (DeviceNode) server listening on port 5540 and announce it as socket device.

This first version only includes the OnOff cluster (on/off smart thing, like a plug or a bulb).
You can use -on and -off parameter to run a script to control something.
For instance, on a Raspberry Pi, this will turn on / off the red LED:

```bash
matter-device -type socket -on "echo 255 > /sys/class/leds/led1/brightness" -off "echo 0 > /sys/class/leds/led1/brightness"
```

or when starting from TS files:

```bash
npm run matter-device -- -type socket -on "echo 255 > /sys/class/leds/led1/brightness" -off "echo 0 > /sys/class/leds/led1/brightness"
```
(Please note the "--" to separate commandline parameters between the npm run and the executed script.

The following parameters are available:
* -passcode: the passcode to use for pairing (default: 20202021)
* -discriminator: the discriminator to use for pairing (default: 3840, value between 0 and 4095)
* -vendorid: the vendor ID as number to use for pairing (default: 65521 (0xFFF1))
* -productid: the product ID as number to use for pairing (default: 32768 (0x8000))
* -uniqueid: a unique ID for this device to be used in naming and to store structure information (default: ms time now)
* -type: the device type to use for pairing (default: light, alternative value is "socket")
* -announceinterface: limit mdns announcements to the provided network interface, e.g. "en0" (default: all interfaces available)
* -ble: enable BLE support (default: false) If this is enabled the device will announce itself _only_ via BLE if not commissioned and also presents a "Wifi only" device for commissioning to show this feature!
* -ble-hci-id: Optionally, HCI ID to use (Linux only, default 0)
* -port: the port to listen on for the device (default: 5540)
* -store: the storage location (directory) to use for storing the pairing information (default: .device-node). Ideally use names starting with a ".". Delete the directory or provide an alternative name to reset the device
* -on: the command to run when the device is turned on (see example above)
* -off: the command to run when the device is turned off (see example above)

Additionally, there are some Testing parameters:
* -ble-wifi-scan-ssid: The Wi-Fi SSID returned by the "ScanNetworks" call of the Wifi Network commissioning cluster used when using BLE commissioning (default: "TestSSID"). Ideally use a really existing SSID that also the commissioner (Apple, Alexa, ...) knows to make it easier to commission. Else you could get errors while commissioning.
* -ble-wifi-scan-bssid: The Wi-Fi BSSID returned by the "ScanNetworks" call of the Wifi Network commissioning cluster used when using BLE commissioning (default: "00:00:00:00:00:00").

### Start a Matter Bridge

> The code for this example is in [src/examples/BridgedDevicesNode.ts](./src/examples/BridgedDevicesNode.ts).

A Bridge is used to expose multiple devices at once.

The usage and parameter are comparable to above. but the bridge adds support for multiple types and on/off commands:

The usage is as above but with modified parameters:
* -num X: number of devices to expose (default 2)
* -typeX socket: type of the devices to expose as device number X (default Light bulb)
* -onX "script": script to run when the device number X is turned on
* -offX "script": script to run when the device number X is turned off

**Please especially use the -uniqueidX parameters to assign unique own IDs to the single deices in order to remember their structure in the bridge. Such an ID should never be reused if you ever remove or add new devices! If you do not use -uniqueidX then the order you added them here is not allowed to ever change.**

```bash
matter-bridge -num 2 -on1 "echo 255 > /sys/class/leds/led1/brightness" -off1 "echo 0 > /sys/class/leds/led1/brightness" -type2 socket -on2 "echo 255 > /sys/class/leds/led2/brightness" -off2 "echo 0 > /sys/class/leds/led2/brightness"
```

or when starting from TS files:

```bash
npm run matter-bridge -- -num 2 -on1 "echo 255 > /sys/class/leds/led1/brightness" -off1 "echo 0 > /sys/class/leds/led1/brightness" -type2 socket -on2 "echo 255 > /sys/class/leds/led2/brightness" -off2 "echo 0 > /sys/class/leds/led2/brightness"
```
(Please note the "--" to separate commandline parameters between the npm run and the executed script.

The above command exposes two devices under the bridge, one as light, one as socket and executes the respective commands when the devices are turned on or off.

### Start a Matter Composed Device

> The code for this example is in [src/examples/ComposedDeviceNode.ts](./src/examples/ComposedDeviceNode.ts).

A composed device is one device with multiple different device types combined. This is useful for devices that have multiple functions, e.g. a light bulb with a temperature sensor.

The parameters are like with the bridge but with an added "-type light/socket" parameter to define the type of the composed device itself.

```bash
matter-composeddevice -type socket -num 2 -on1 "echo 255 > /sys/class/leds/led1/brightness" -off1 "echo 0 > /sys/class/leds/led1/brightness" -type2 socket -on2 "echo 255 > /sys/class/leds/led2/brightness" -off2 "echo 0 > /sys/class/leds/led2/brightness"
```

or when starting from TS files:

```bash
npm run matter-composeddevice -- -type socket -num 2 -on1 "echo 255 > /sys/class/leds/led1/brightness" -off1 "echo 0 > /sys/class/leds/led1/brightness" -type2 socket -on2 "echo 255 > /sys/class/leds/led2/brightness" -off2 "echo 0 > /sys/class/leds/led2/brightness"
```
(Please note the "--" to separate commandline parameters between the npm run and the executed script.

The above command exposes a composed device with a socket and a light device and executes the respective commands when the devices are turned on or off.

### Start multiple Matter Devices in one process

> The code for this example is in [src/examples/MultiDeviceNode.ts](./src/examples/MultiDeviceNode.ts).

matter.js also allows it to start multiple devices in one process. With this especially the MDNS functionalities are shared between these processes and it should use less resources. How many devices you acn add in one process depends on the load they produce and how many devices run in the single Node.js thread.

The parameters are like with the composed device or bridge.

```bash
matter-multidevice -type socket -num 2 -on1 "echo 255 > /sys/class/leds/led1/brightness" -off1 "echo 0 > /sys/class/leds/led1/brightness" -type2 socket -on2 "echo 255 > /sys/class/leds/led2/brightness" -off2 "echo 0 > /sys/class/leds/led2/brightness"
```

or when starting from TS files:

```bash
npm run matter-multidevice -- -type socket -num 2 -on1 "echo 255 > /sys/class/leds/led1/brightness" -off1 "echo 0 > /sys/class/leds/led1/brightness" -type2 socket -on2 "echo 255 > /sys/class/leds/led2/brightness" -off2 "echo 0 > /sys/class/leds/led2/brightness"
```
(Please note the "--" to separate commandline parameters between the npm run and the executed script.

The above command exposes two single light devices (one socket and on light) and executes the respective commands when the devices are turned on or off.

### Start a Matter Controller

> The code for this example is in [src/examples/ControllerNode.ts](./src/examples/ControllerNode.ts).

**Experimental**
The current controller implementation is no CLI tool, but shows the pairing of devices and resuming the connection and also showcase the existing low-level controller API. It is just intended to be used for debugging, during development! The code contains some commented-out examples of how to use the low level controller API.
Please **do not** use this for production, we will replace the API soon!

The controller currently is not discovering the device to pair, but directly connects to the IP/port defined bin the command line parameters.

To run from the build files:

```bash
matter-controller -pairingcode 12345678901
```

To run directly from Typescript files with on the fly compilation:

```bash
npm run matter-controller -- -pairingcode 12345678901
```

This will commission a MatterServer device (for debugging/capability showing purpose only for now).

The following parameters are available and used to initially commission a device (they can be omitted after this):
* If the IP and Port of the device is known (should be only the case in testing cases) you can use the following parameters:
  * -ip: the IP address of the device to commission (can be used but discovery via pairingcode or discriminator or also just pin (passode) is most likely better)
  * -port the port of the device to commission (default: 5540)
* Device identification options:
  * -pairingcode: code to use for pairing (-longDiscriminator and -pin will be ignored) - usually the code below the QR Code on the device or displayed in the app!
  * -longDiscriminator: the discriminator to use for pairing (default: 3840, value between 0 and 4095)
  * -pin: the pin to use for pairing (default: 20202021)
* When the device to commission is not already in the IP network and also not an Ethernet device commission can be done via ble. In this case the following parameters are used:
  * -ble: enable BLE support (default: false) If this is enabled the controller will try to connect via BLE first (15s timeout) and then via IP if not commissioned yet!
  * -ble-hci-id: Optionally, HCI ID to use (Linux only, default 0)
  * -ble-wifi-ssid: SSID/Name of the Wifi network to connect to - The device will scan especially for this network and commissioning will fail if not found
  * -ble-wifi-credentials: Credentials for the Wifi network to connect to
  * -ble-thread-networkname: Name of the Thread network to connect to - The device will verify that a thread network with this name is reachable by the device and commissioning will fail if not found
  * -ble-thread-operationaldataset: Operational dataset as hex string to use for commissioning (of using OTBR use `ot-ctl dataset active -x` to get the value)
* Storage configuration parameter
  * -store: the storage location (directory) to use for storing the pairing information (default: .controller-node). Ideally use names with "." at the beginning. Delete the directory or provide an alternative name to reset the controller
  * -clearstorage: the storage location will be reset on start of the process

## Development on basis of the examples

The code of the examples is written so that you can use them as basis for your own scripts also outside of this library in your own package. YOu just need to add a dependency to @project-chip/matter-node.js. The examples are already using these imports for more easy adoption.

### Development Device/Composed-device/Bridge

The code is structured by comment blocks to better see what belongs to what. It always has code which is just collecting relevant information and data, then the code which is setting up the device and then the code which is starting the device.

## Building

* `npm run build`: Build all code and create CommonJS and ES6 variants in dist directory. This will built incrementally and only build the changed files.
* `npm run build-clean`: Clean the dist directory and build all code from scratch
