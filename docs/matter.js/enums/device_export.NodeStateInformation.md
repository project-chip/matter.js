[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [device/export](../modules/device_export.md) / NodeStateInformation

# Enumeration: NodeStateInformation

[device/export](../modules/device_export.md).NodeStateInformation

## Table of contents

### Enumeration Members

- [Connected](device_export.NodeStateInformation.md#connected)
- [Decommissioned](device_export.NodeStateInformation.md#decommissioned)
- [Disconnected](device_export.NodeStateInformation.md#disconnected)
- [Reconnecting](device_export.NodeStateInformation.md#reconnecting)
- [StructureChanged](device_export.NodeStateInformation.md#structurechanged)
- [WaitingForDeviceDiscovery](device_export.NodeStateInformation.md#waitingfordevicediscovery)

## Enumeration Members

### Connected

• **Connected** = ``0``

Node is connected and all data is up-to-date.

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L63)

___

### Decommissioned

• **Decommissioned** = ``5``

The node was just Decommissioned.

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L89)

___

### Disconnected

• **Disconnected** = ``1``

Node is disconnected. Data are stale and interactions will most likely return an error. If controller instance
is still active then the device will be reconnected once it is available again.

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L69)

___

### Reconnecting

• **Reconnecting** = ``2``

Node is reconnecting. Data are stale. It is yet unknown if the reconnection is successful.

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:72](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L72)

___

### StructureChanged

• **StructureChanged** = ``4``

Node structure has changed (Endpoints got added or also removed). Data are up-to-date.
This State information will only be fired when the subscribeAllAttributesAndEvents option is set to true.

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L84)

___

### WaitingForDeviceDiscovery

• **WaitingForDeviceDiscovery** = ``3``

The node could not be connected and the controller is now waiting for a MDNS announcement and tries every 10
minutes to reconnect.

#### Defined in

[packages/matter.js/src/device/PairedNode.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/device/PairedNode.ts#L78)
