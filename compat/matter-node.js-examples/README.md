# matter-node.js-examples

> [!IMPORTANT]
> The examples in this package are deprecated.  We will remove them in a future release when we remove the corresponding
deprecated API surface area.

The examples that use the most current API are in [@matter/examples](../../packages/examples/README.md).

### Legacy Device Examples
These examples use the matter.js API up to 0.7, which is considered "Legacy" now because it will be replaced by a new API starting with 0.8. The functionality is still working, but should be considered deprecated and will be removed with a later release!
The filenames of these examples were adjusted in 0.8 and a "Legacy" was added to the end of the filename and "-legacy" to the npm run script name (exception: DeviceNode is now called DeviceNodeFullLegacy). Other than that they are fully compatible(*) with the pre-0.7 versions also regarding storage location and structure and can be directly used as before.

(*) Note: The CLI format has changed between legacy and the new device examples. In the new the parameters look like "--option=value" while in the legacy examples the parameters look like "--option value".

All examples create a MatterServer instance to add Matter nodes to be announced on a definable port number (default 5540).

* **BridgedDevicesNodeLegacy**: This example shows how to build a Matter-Bridge that offers multiple OnOff lights and/or sockets as a bridge. It can be configured via command line and allows for the specification of shell commands that will be executed for on and off commands on the numbered devices. For more details, see below.
* **ComposedDeviceNodeLegacy**: This example shows how to build a "simple" composed device where multiple OnOff lights and sockets are combined as one composed device. The devices are all added on the root level, so no bridge is used. The composed device can be configured via command line and allows for the specification of shell commands that will be executed for on and off commands, on the numbered devices. For more details, see below.
* **DeviceNodeFullLegacy**: This example shows how to build a simple Device node with just one socket or light endpoint. The shell commands to be executed by on/off commands can be configured via CLI. Additionally, this example also shows how to enable BLE for a device node and tweaks the announcement so that only BLE is announced in the beginning. This example also includes a dummy WifiNetworkCommissioning implementation that simulates Wi-Fi logic for the commissioner. Furthermore it also shows how to handle testEventTrigger calls on the GeneralDiagnostics cluster which might be needed for official device testing cases. It also implements the callbacks where implementers can get information on commissioning changes and session/connection changes to better know the status of the node.
* **MultiDeviceNodeLegacy**: This example shows how to start multiple Matter nodes on one MatterServer where each node is run on its own Port, but share a single MDNS broadcaster and scanner in order to optimize resources. Each node can be configured via CLI to be an onoff socket or a light. CLI. Options also allow specification of shell commands to be executed for on and off commands.

## Legacy Storage Converter
The Legacy storage converter can convert the Device and Controller storages from the legacy examples. It will convert all relevant storage keys, but not the persisted cluster specific data (which should be acceptable because near to irrelevant for the device types we had examples for).

To use the converter, you need to run the following command:
```bash
npm run matter-legacystorageconverter -- --legacy-storage-path=<Path-to-Legcy-Storage-Dir> --storage-path=<Path-to-New-Storage-Dir>
```

> [!NOTICE]
> The Converter might tell you to make sure to use the full parameters when starting the new example after conversion. This is needed in some cases because some data were not stored in the storage prior the new versions and are so missing in the storage.

After this you can use the new Device example script to start it.
