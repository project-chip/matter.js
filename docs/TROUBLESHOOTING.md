# Troubleshooting, or "Why the heck it's not working?"

Matter tries to be as simple and convenient as possible, but based on the complexity of the underlying protocols and the variety of devices and ecosystems, there are some things that can go wrong. This page tries to list the most common issues and how to solve them.

If you find more topics that might help other users, please let us know as Issue or PR to add it here.

## Pairing issues

### Network considerations

Matter is using MDNS, a UDP based protocol, to discover devices. This can be blocked by firewalls or network settings. Also different network segments can be a problem because routers normally do not route UDP packages between them. If you have such a setup please make sure everything is configured to route UDP packages.

For all ecosystems that use a Hub (basically everything beside Tuya currently) you need to make sure that the host with the matter.js device is reachable from the network of your mobile device AND the network from the hub. Usually the commissioning process happens from the app, but the communication afterwards is done by the hub. So the hub needs to be able to reach the matter.js device. This includes all requirements for UDP packages as mentioned above.

If you have issues with pairing, please check if your network allows UDP traffic on port 5540, which is the default port.

Matter requires mainly IPv6, but optionally also allows IPv4. If you have issues with pairing, please check if your network allows IPv6 traffic.

### "Uncertified device"

Matter.js based projects show up as "uncertified test devices" in the ecosystems. This is because the devices are not certified by the Connectivity Standards Alliance (CSA) and are not part of the official Matter certification program. However, the devices are fully functional and can be used in the ecosystems. The ecosystems usually inform the user about the uncertified status of the device. Please see [Pairing and Usage Information](./ECOSYSTEMS.md#pairing-and-usage-information) for more details.

Some ecosystems might not allow uncertified devices to be added. In this case you need to check the settings of the ecosystem to allow uncertified devices or contact the support of the ecosystem.

### How to report issues

If you have issues with pairing, please provide the following information when reporting the issue:
-  Debug Log - please do not cut it out yourself. In most cases "more log is better"
-  Node.js Version and OS type and version
-  Ecosystem you are using
-  Screenshots if relevant or information on errors you received

## Development issues

### General information

Because Matter.js is still in active development the API documentation is not as complete as we would like to have it. Currently the following information sources are available:
* Example packages in the [matter-node.js-examples](../packages/matter-node.js-examples/README.md) package
* [API-Docs](./README.md)
* AN Overview of the new API is also included in the [Migration to new API](./MIGRATION_GUIDE_08.md). It's worth a read in any case!
