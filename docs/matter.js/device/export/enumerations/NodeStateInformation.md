[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [device/export](../README.md) / NodeStateInformation

# Enumeration: NodeStateInformation

## Enumeration Members

### Connected

> **Connected**: `0`

Node is connected and all data is up-to-date.

#### Source

[packages/matter.js/src/device/PairedNode.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L63)

***

### Decommissioned

> **Decommissioned**: `5`

The node was just Decommissioned.

#### Source

[packages/matter.js/src/device/PairedNode.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L89)

***

### Disconnected

> **Disconnected**: `1`

Node is disconnected. Data are stale and interactions will most likely return an error. If controller instance
is still active then the device will be reconnected once it is available again.

#### Source

[packages/matter.js/src/device/PairedNode.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L69)

***

### Reconnecting

> **Reconnecting**: `2`

Node is reconnecting. Data are stale. It is yet unknown if the reconnection is successful.

#### Source

[packages/matter.js/src/device/PairedNode.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L72)

***

### StructureChanged

> **StructureChanged**: `4`

Node structure has changed (Endpoints got added or also removed). Data are up-to-date.
This State information will only be fired when the subscribeAllAttributesAndEvents option is set to true.

#### Source

[packages/matter.js/src/device/PairedNode.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L84)

***

### WaitingForDeviceDiscovery

> **WaitingForDeviceDiscovery**: `3`

The node could not be connected and the controller is now waiting for a MDNS announcement and tries every 10
minutes to reconnect.

#### Source

[packages/matter.js/src/device/PairedNode.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/device/PairedNode.ts#L78)
