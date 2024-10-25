# OnOff light/socket device with BLE support and advanced API usage

This example shows how to build a simple Device node with just one socket or light endpoint. The shell commands to be executed by on/off commands can be configured via CLI. Additionally, this example also shows the following use cases:
- it shows how to enable BLE for a device node and tweaks the announcement so that BLE is only announced in the beginning.
-it includes a dummy WifiNetworkCommissioning and a dummy ThreadNetworkCommissioning implementation that simulates Wi-Fi/Thread logic for the commissioner and logs the Wi-Fi/Thread credentials the commissioner sends to the device.
- it enhances the GeneralDiagnostics and OnOff cluster to implement some commands with its own logic.
- it defines the ["My Fancy Functionality" custom cluster](./cluster/MyFancyOwnFunctionality.ts) and adds this to the OnOff endpoint as additional cluster when the chosen vendorId is set to 0xfff4 (65524)
- it implements the callbacks where developers can get information on commissioning changes and session/connection changes to better know the status of the node.

## Usage

For general documentation about the CLI parameters or environment variables that can be used for matter.js please refer to the [Examples README](../../../README.md#cli-usage).

The CLI parameter are else documented at the [Device Node Readme](../onoff-cli/README.md).

This example is not exposed as npm script so starting requires to run the ts file or the build file.

```bash
node .dist/examples/onoff-advanced-cli/DeviceNodeFull.js
```
