# matter-node.js-examples

[![license](https://img.shields.io/badge/license-Apache2-green.svg?style=flat)](https://raw.githubusercontent.com/mfucci/node-matter/master/LICENSE)

This project provides a set of reference implementations to offer several types of Matter device nodes or also a controller.

> This package requires Node 16+ for the required Crypto primitives

# matter-node.js Usage examples / Reference implementations

To better show how to use the library we provide some reference implementations in the examples directory. They are usable as CLI scripts without changes in the first place but are very simple. They are meant to be used as a starting point for your own implementation, or to experiment with Matter at all in a first place.

For BLE usage please also see the [matter-node-ble.js README.md](../matter-node-ble.js/README.md)  for prerequisites and limitations!

## Examples Overview
The examples provided by this repository show different use cases demonstrating how to build different device types and show various ways to implement and interact with the matter.js structures. This section gives an overview regarding what the different examples demonstrate.

> [!IMPORTANT]
> With matter.js 0.8 we introduced a new API that is not compatible with the old API. The new API is more flexible and allows for more complex use cases. The old API is still supported but will be removed in a future release. The examples are provided for both APIs. The new API examples are named without "Legacy" in the filename and the npm run script is named without "-legacy". The old API examples are named with "Legacy" in the filename and the npm run script is named with "-legacy".
> If you used the old Example scripts and want to just switch to use the new scripts you need to convert the device storage once. Please see below in the section about the ["Legacy Storage Converter"](#legacy-storage-converter).


### Legacy Device Examples
These examples use the matter.js API up to 0.7, which is considered "Legacy" now because it will be replaced by a new API starting with 0.8. The functionality is still working, but should be considered deprecated and will be removed with a later release!
The filenames of these examples were adjusted in 0.8 and a "Legacy" was added to the end of the filename and "-legacy" to the npm run script name (exception: DeviceNode is now called DeviceNodeFullLegacy). Other than that they are fully compatible with the pre-0.7 versions also regarding storage location and structure and can be directly used as before.

All examples create a MatterServer instance to add Matter nodes to be announced on a definable port number (default 5540).

* **BridgedDevicesNodeLegacy**: This example shows how to build a Matter-Bridge that offers multiple OnOff lights and/or sockets as a bridge. It can be configured via command line and allows for the specification of shell commands that will be executed for on and off commands on the numbered devices. For more details, see below.
* **ComposedDeviceNodeLegacy**: This example shows how to build a "simple" composed device where multiple OnOff lights and sockets are combined as one composed device. The devices are all added on the root level, so no bridge is used. The composed device can be configured via command line and allows for the specification of shell commands that will be executed for on and off commands, on the numbered devices. For more details, see below.
* **DeviceNodeFullLegacy**: This example shows how to build a simple Device node with just one socket or light endpoint. The shell commands to be executed by on/off commands can be configured via CLI. Additionally, this example also shows how to enable BLE for a device node and tweaks the announcement so that only BLE is announced in the beginning. This example also includes a dummy WifiNetworkCommissioning implementation that simulates Wi-Fi logic for the commissioner. Furthermore it also shows how to handle testEventTrigger calls on the GeneralDiagnostics cluster which might be needed for official device testing cases. It also implements the callbacks where implementers can get information on commissioning changes and session/connection changes to better know the status of the node.
* **MultiDeviceNodeLegacy**: This example shows how to start multiple Matter nodes on one MatterServer where each node is run on its own Port, but share a single MDNS broadcaster and scanner in order to optimize resources. Each node can be configured via CLI to be an onoff socket or a light. CLI. Options also allow specification of shell commands to be executed for on and off commands.

## New API Device Examples
Some command line parameters, for example those used to set the level of logging or the MDNS interface are now included in the new environment processing. These can be set by generic command line arguments or by using environment variables. These parameters are processed automatically so are no longer handled by the new example code directly. These are:

* `--log-level=...` or environment variable `MATTER_LOG_LEVEL` or in code `environment.vars.set('log.level', Level.DEBUG)`. Allowed values are: Level.FATAL ("fatal"), Level.ERROR ("error"), Level.WARN ("warn"), Level.NOTICE ("notice"), Level.INFO ("info"), Level.DEBUG ("debug")
* `--log-format=...` or environment variable `MATTER_LOG_FORMAT` or `environment.vars.set('log.format', Format.PLAIN)`. Allowed values are: Format.PLAIN ("plain"), Format.HTML ("html"), Format.ANSI ("ansi")
* `--storage-path=...` or environment variable `MATTER_STORAGE_PATH` or `environment.vars.set('storage.path', "...")` allows to set the storage location. By default, it will be stored in the users home directory in `.matter/...`. If specified, the given path will be used relative to the current working directory.
* `--storage-clear` or environment variable `MATTER_STORAGE_CLEAR=1` or `environment.vars.set('storage.clear', true)` allows to define if the storage is reset on startup.
* `--mdns-networkinterface=...` or environment variable `MATTER_MDNS_NETWORKINTERFACE` or `environment.vars.set('mdns.networkInterface', "...")` allows to limit the DNS announcements and scanning to one network interface. By default, all available interfaces are used.
Additionally, all command line parameters now require to start with two dashes!

* **BridgedDevicesNode**: This example shows how to build a Matter-Bridge that offers multiple OnOff lights and sockets as a bridge. It can be configured via command line and allows for specifications of shell commands to be executed when on and off commands are received at the numbered devices. For more details see below.
* **ComposedDeviceNode**: This example shows how to build a "simple" composed device where multiple OnOff lights and sockets are combined as a single device. The devices are all added at the root level, so no bridge is used. It can be configured via command line and allows for specifications of shell commands to be executed when on and off commands are received at the numbered devices. For more details see below.
* **DeviceNode**: This example shows how to build a simple minimalistic DeviceNode with just one socket or light endpoint. The shell commands to be executed by on/off commands can be configured via CLI.
* **DeviceNodeFull**: This example shows how to build a simple Device node with just one socket or light endpoint. The shell commands to be executed by on/off commands can be configured via CLI. Additionally, this example also shows the following use cases:
  * it shows how to enable BLE for a device node and tweaks the announcement so that BLE is only announced in the beginning. 
  * it includes a dummy WifiNetworkCommissioning and a dummy ThreadNetworkCommissioning implementation that simulates Wi-Fi/Thread logic for the commissioner and logs the Wi-Fi/Thread credentials the commissioner sends to the device. 
  * it enhances the GeneralDiagnostics and OnOff cluster to implement some commands with its own logic.
  * it defines the ["My Fancy Functionality" custom cluster](./src/examples/cluster/MyFancyOwnFunctionality.ts) and adds this to the OnOff endpoint as additional cluster when the chosen vendorId is set to 0xfff4 (65524) 
  * it implements the callbacks where developers can get information on commissioning changes and session/connection changes to better know the status of the node.
* **MultiDeviceNode**: This example shows how to start multiple Matter nodes on one MatterServer where each node is run on its own Port, but share a single MDNS broadcaster and scanner in order to optimize resources. Each node can be configured via CLI to be an onoff socket or a light. CLI. Options also allow specification of shell commands to be executed for on and off commands.
* * **SensorDeviceNode**: This example shows how to build a simple Sensor device with a temperature (default) or humidity (`--type humidity`) sensor. The sensor values are updated by default every 60 seconds, or the number of seconds specified via the CLI parameter `--interval`. The value can be defined by the output of a CLI script provided via parameter `--value` or, if no command is specified, are randomly set in the interval -50..+50. To read the Temperature of a Raspberry Pi as example use `--value ="echo \$((\$(</sys/class/thermal/thermal_zone0/temp)/10))"` or to read temperature of your location `--value="curl -s 'wttr.in/?format=%t\&m' | sed 's/°C//'| awk '{print \$1*100}'"` (or use `?format=%h` for humidity).

Additionally, these two examples are not directly configurable by CLI and mainly show how to implement different combinations of devices:
* **IlluminatedRollerShade**: This example implements the Window Covering cluster server logic and also overrides a OnOff cluster server to build a composed devices with a window covering nd a light.
* **LightDevice**: This example shows how to run a Light device which is not configurable via CLI and only logs changes, so it is the most minimalistic example. It shows how to enhance the OnOff cluster server with own logic.

## Controller example
* **ControllerNode**: This example shows basically how a controller could be implemented by showing pairing and connections to a paired device. When there is an OnOff Endpoint with ID 1 then this is controlled and toggled.

## Legacy Storage Converter
The Legacy storage converter can convert the Device and Controller storages from the legacy examples. It will convert all relevant storage keys, but not the persisted cluster specific data (which should be acceptable because near to irrelevant for the device types we had examples for).

To use the converter, you need to run the following command:
```bash
npm run matter-legacystorageconverter -- --legacy-storage-path=<Path-to-Legcy-Storage-Dir> --storage-path=<Path-to-New-Storage-Dir>
```

> [!NOTICE]
> The Converter might tell you to make sure to use the full parameters when starting the new example after conversion. This is needed in some cases because some data were not stored in the storage prior the new versions and are so missing in the storage.

After this you can use the new Device example script to start it.

## Installation

### From NPM

```bash
npm i -g @project-chip/matter-node.js-examples
```

### Use from Cloned Matter.js Repository

When you clone the matter.js repository you can also use matter-node.js. To do this you need to execute `npm install` in the matter.js root directory once to install all dependencies and build all packages.

Then after `cd packages/matter-node.js-examples` you can use `npm run matter-device` to run the matter-node.js server. Please see the next section for more details.

### Bundling

For production environments where space and/or CPU is at a premium, you might consider using a bundler to distribute your application.  This project includes an example demonstrating how to create such a bundle using [esbuild](https://esbuild.github.io/).

To run the example, first install as described in [From NPM](#from-npm) or [Use from Cloned Matter.js Repository](#use-from-cloned-matterjs-repository).

Then in the `matter-node.js-examples` installation directory, run:

```bash
npm run bundle-device
```

This creates a single JavaScript file containing the application and dependencies.

To view the example commands for bundling and running, see scripts `bundle-device` and `matter-device-bundled` in [package.json](package.json).

Note that you cannot include native dependencies in this way so those will still need to be installed locally using NPM.  In this example, those are the dependencies flagged as `--external` in the `esbuild` command line.

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

**If you want to start multiple parallel processes please make sure to use different storage locations, different network port and ideally also different passcodes for each process!**

The following parameters are available:
* -passcode: the passcode to use for pairing (default: 20202021)
* -discriminator: the discriminator to use for pairing (default: 3840, value between 0 and 4095)
* -vendorid: the vendor ID as number to use for pairing (default: 65521 (0xFFF1))
* -productid: the product ID as number to use for pairing (default: 32768 (0x8000))
* -uniqueid: a unique ID for this device to be used in naming and to store structure information (default: ms time now)
* -type: the device type to use for pairing (default: light, alternative value is "socket")
* -netinterface: limit mdns announcements and scanning to the provided network interface, e.g. "en0" (default: all interfaces available)
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

The usage and parameter are comparable to above, but the bridge adds support for multiple types and on/off commands:

**If you want to start multiple parallel processes please make sure to use different storage locations, different network port and ideally also different passcodes for each process!**

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

**If you want to start multiple parallel processes please make sure to use different storage locations, different network port and ideally also different passcodes for each process!**

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
