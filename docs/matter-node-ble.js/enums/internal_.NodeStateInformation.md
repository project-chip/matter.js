[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / NodeStateInformation

# Enumeration: NodeStateInformation

[\<internal\>](../modules/internal_.md).NodeStateInformation

## Table of contents

### Enumeration Members

- [Connected](internal_.NodeStateInformation.md#connected)
- [Decommissioned](internal_.NodeStateInformation.md#decommissioned)
- [Disconnected](internal_.NodeStateInformation.md#disconnected)
- [Reconnecting](internal_.NodeStateInformation.md#reconnecting)
- [StructureChanged](internal_.NodeStateInformation.md#structurechanged)
- [WaitingForDeviceDiscovery](internal_.NodeStateInformation.md#waitingfordevicediscovery)

## Enumeration Members

### Connected

• **Connected** = ``0``

Node is connected and all data is up-to-date.

#### Defined in

matter.js/dist/esm/device/PairedNode.d.ts:21

___

### Decommissioned

• **Decommissioned** = ``5``

The node was just Decommissioned.

#### Defined in

matter.js/dist/esm/device/PairedNode.d.ts:42

___

### Disconnected

• **Disconnected** = ``1``

Node is disconnected. Data are stale and interactions will most likely return an error. If controller instance
is still active then the device will be reconnected once it is available again.

#### Defined in

matter.js/dist/esm/device/PairedNode.d.ts:26

___

### Reconnecting

• **Reconnecting** = ``2``

Node is reconnecting. Data are stale. It is yet unknown if the reconnection is successful.

#### Defined in

matter.js/dist/esm/device/PairedNode.d.ts:28

___

### StructureChanged

• **StructureChanged** = ``4``

Node structure has changed (Endpoints got added or also removed). Data are up-to-date.
This State information will only be fired when the subscribeAllAttributesAndEvents option is set to true.

#### Defined in

matter.js/dist/esm/device/PairedNode.d.ts:38

___

### WaitingForDeviceDiscovery

• **WaitingForDeviceDiscovery** = ``3``

The node could not be connected and the controller is now waiting for a MDNS announcement and tries every 10
minutes to reconnect.

#### Defined in

matter.js/dist/esm/device/PairedNode.d.ts:33
