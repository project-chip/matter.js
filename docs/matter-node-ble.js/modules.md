[@project-chip/matter-node-ble.js](README.md) / Exports

# @project-chip/matter-node-ble.js

## Table of contents

### Modules

- [\<internal\>](modules/internal_.md)

### Classes

- [BleBroadcaster](classes/BleBroadcaster.md)
- [BleNode](classes/BleNode.md)
- [BleScanner](classes/BleScanner.md)

### Type Aliases

- [BleOptions](modules.md#bleoptions)
- [DiscoveredBleDevice](modules.md#discoveredbledevice)

## Type Aliases

### BleOptions

Ƭ **BleOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hciId?` | `number` |

#### Defined in

[matter-node-ble.js/src/ble/BleNode.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleNode.ts#L18)

___

### DiscoveredBleDevice

Ƭ **DiscoveredBleDevice**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `deviceData` | [`CommissionableDeviceData`](modules/internal_.md#commissionabledevicedata) |
| `hasAdditionalAdvertisementData` | `boolean` |
| `peripheral` | `Peripheral` |

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BleScanner.ts#L19)
