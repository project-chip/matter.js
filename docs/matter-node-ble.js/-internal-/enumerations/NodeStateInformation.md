[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / NodeStateInformation

# Enumeration: NodeStateInformation

## Enumeration Members

### Connected

> **Connected**: `0`

Node is connected and all data is up-to-date.

#### Source

matter.js/dist/esm/device/PairedNode.d.ts:21

***

### Decommissioned

> **Decommissioned**: `5`

The node was just Decommissioned.

#### Source

matter.js/dist/esm/device/PairedNode.d.ts:42

***

### Disconnected

> **Disconnected**: `1`

Node is disconnected. Data are stale and interactions will most likely return an error. If controller instance
is still active then the device will be reconnected once it is available again.

#### Source

matter.js/dist/esm/device/PairedNode.d.ts:26

***

### Reconnecting

> **Reconnecting**: `2`

Node is reconnecting. Data are stale. It is yet unknown if the reconnection is successful.

#### Source

matter.js/dist/esm/device/PairedNode.d.ts:28

***

### StructureChanged

> **StructureChanged**: `4`

Node structure has changed (Endpoints got added or also removed). Data are up-to-date.
This State information will only be fired when the subscribeAllAttributesAndEvents option is set to true.

#### Source

matter.js/dist/esm/device/PairedNode.d.ts:38

***

### WaitingForDeviceDiscovery

> **WaitingForDeviceDiscovery**: `3`

The node could not be connected and the controller is now waiting for a MDNS announcement and tries every 10
minutes to reconnect.

#### Source

matter.js/dist/esm/device/PairedNode.d.ts:33
