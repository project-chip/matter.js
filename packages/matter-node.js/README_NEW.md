# Readme additional infos (temporary)

These infos will be merged into the official Readme before we merge this PR and accept all these changes.

## General Information
I decided to do the rebuild in several steps to make it easier to review and to merge.
* Step 1: Define the new API and implement it in the existing code. This is done in this PR. This uses still the "old" legacy classes MatterDevice and MatterController under the hood and is because of this limited to only one node at a time. That's why also CommisionableNode and PairableNode classes are "wrapping" around MatterDevice and MatterController.
* Step 2: Combine MatterController/Device to one thing and adjust the needed things for this.

## TODOs/Open topics!
* The storage is not yet changed to allow Multi-Nodes. This will come (breaking) before merge!
* The ClusterClient was changed tobe an object with the same structure as ClusterServer to internally streamline code. I need to iterate further on this to have a meaningful API
* The new Controller (pairable node) API is still WIP. Especially the whole usage as controller and for ClusterClients.
* The storage for the new device classes is just basic and needs to get enhanced (e.g, last generated endpoint id and such)
* Investigate/Check specs on how to add new devices to a bridge (check Matter Core specs)
* Check bridge and composed devices with tuya, smartthings and Alexa again; and test composed device with google


## New versions of Device.ts and Controller.ts
For now the original Device.ts and Controller.ts that are offered as the default "CLI tools" are still "untouched".

Additionally new Files are added that show how it looks with the new API and potentially got also enhanced functionality. 
These new files do not have own npm run entries for now, so start them manually by

`ts-node src/NewXXX.ts` or `node dist/NewXXX.js` 

### NewDevice.ts
This got much shorter and more clean now. The following new feature was added:
* a new CLI parameter -type was added to decide if the device is announced as an "OnOff-Light" or an "OnOff-Socket/Plugin-Unit". Provide `-type socket` to announce the device as a socket. Default is "light" as of till now.

### NewBridgedDevicesNode.ts
This was added to show how to create a "bridge" device that is not a real device but a container for other devices.

The usage is as above but with modified parameters:
* **-num X**: number of devices to expose (default 2)
* **-typeX socket**: type of the devices to expose as device number X (default Light bulb)
* **-onX "script"**: script to run when the device number X is turned on
* **-offX "script"**: script to run when the device number X is turned off

```bash
node dist/NewBridgedDevicesNode.js -num 2 -on1 "echo 255 > /sys/class/leds/led1/brightness" -off1 "echo 0 > /sys/class/leds/led1/brightness" -type2 socket -on2 "echo 255 > /sys/class/leds/led2/brightness" -off2 "echo 0 > /sys/class/leds/led2/brightness"
```

The above command exposes two devices under the bridge, one as light, one as socket and executes the respective commands when the devices are turned on or off.

### NewComposedDeviceNode.ts
This was added to show how to create a "composed" device which combines multiple sub devices into one device.

The usage is as above but with modified parameters:
* **-num X**: number of devices to expose (default 2)
* **-type light**: The type of the composed device (default Light bulb)
* **-typeX socket**: type of the devices to expose as device number X (default Light bulb)
* **-onX "script"**: script to run when the device number X is turned on
* **-offX "script"**: script to run when the device number X is turned off

```bash
node dist/NewComposedDeviceNode.js -num 2 -type socket -on1 "echo 255 > /sys/class/leds/led1/brightness" -off1 "echo 0 > /sys/class/leds/led1/brightness" -type2 socket -on2 "echo 255 > /sys/class/leds/led2/brightness" -off2 "echo 0 > /sys/class/leds/led2/brightness"
```

The above command exposes one composed device with two sub-devices, one as light, one as socket and executes the respective commands when the devices are turned on or off.

### NewControllerNode.ts
The functionality is the same as the original Controller.ts but adjusted to use the new API. But especially the whole usage of CLusterClients is still WIP ...

