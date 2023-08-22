[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / NobleBleClient

# Class: NobleBleClient

[<internal>](../modules/internal_.md).NobleBleClient

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

• **new NobleBleClient**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BleOptions`](../modules.md#bleoptions) |

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L44)

## Properties

### deviceDiscoveredCallback

• `Private` **deviceDiscoveredCallback**: `undefined` \| (`peripheral`: `Peripheral`, `manufacturerData`: `Uint8Array`) => `void`

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L42)

___

### discoveredPeripherals

• `Private` `Readonly` **discoveredPeripherals**: `Map`<`string`, { `matterServiceData`: `Uint8Array` ; `peripheral`: `Peripheral`  }\>

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:35](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L35)

___

### isScanning

• `Private` **isScanning**: `boolean` = `false`

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L40)

___

### nobleState

• `Private` **nobleState**: `string` = `"unknown"`

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L41)

___

### shouldScan

• `Private` **shouldScan**: `boolean` = `false`

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L39)

## Methods

### handleDiscoveredDevice

▸ `Private` **handleDiscoveredDevice**(`peripheral`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peripheral` | `Peripheral` |

#### Returns

`void`

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L86)

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

[matter-node-ble.js/src/ble/NobleBleClient.ts:62](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L62)

___

### startScanning

▸ **startScanning**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:69](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L69)

___

### stopScanning

▸ **stopScanning**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/NobleBleClient.ts:81](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L81)
