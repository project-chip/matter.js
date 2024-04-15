[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / NobleBleClient

# Class: NobleBleClient

[\<internal\>](../modules/internal_.md).NobleBleClient

## Table of contents

### Constructors

- [constructor](internal_.NobleBleClient.md#constructor)

### Properties

- [deviceDiscoveredCallback](internal_.NobleBleClient.md#devicediscoveredcallback)
- [discoveredPeripherals](internal_.NobleBleClient.md#discoveredperipherals)
- [isScanning](internal_.NobleBleClient.md#isscanning)
- [nobleState](internal_.NobleBleClient.md#noblestate)
- [shouldScan](internal_.NobleBleClient.md#shouldscan)

### Methods

- [handleDiscoveredDevice](internal_.NobleBleClient.md#handlediscovereddevice)
- [setDiscoveryCallback](internal_.NobleBleClient.md#setdiscoverycallback)
- [startScanning](internal_.NobleBleClient.md#startscanning)
- [stopScanning](internal_.NobleBleClient.md#stopscanning)

## Constructors

### constructor

• **new NobleBleClient**(`options?`): [`NobleBleClient`](internal_.NobleBleClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BleOptions`](../modules.md#bleoptions) |

#### Returns

[`NobleBleClient`](internal_.NobleBleClient.md)

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L40)

## Properties

### deviceDiscoveredCallback

• `Private` **deviceDiscoveredCallback**: `undefined` \| (`peripheral`: `Peripheral`, `manufacturerData`: `Uint8Array`) => `void`

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L38)

___

### discoveredPeripherals

• `Private` `Readonly` **discoveredPeripherals**: `Map`\<`string`, \{ `matterServiceData`: `Uint8Array` ; `peripheral`: `Peripheral`  }\>

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L31)

___

### isScanning

• `Private` **isScanning**: `boolean` = `false`

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L36)

___

### nobleState

• `Private` **nobleState**: `string` = `"unknown"`

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L37)

___

### shouldScan

• `Private` **shouldScan**: `boolean` = `false`

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L35)

## Methods

### handleDiscoveredDevice

▸ **handleDiscoveredDevice**(`peripheral`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peripheral` | `Peripheral` |

#### Returns

`void`

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L92)

___

### setDiscoveryCallback

▸ **setDiscoveryCallback**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`peripheral`: `Peripheral`, `manufacturerData`: `Uint8Array`) => `void` |

#### Returns

`void`

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L67)

___

### startScanning

▸ **startScanning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L74)

___

### stopScanning

▸ **stopScanning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L86)
