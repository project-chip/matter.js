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

matter-node-ble.js/src/ble/NobleBleClient.ts:39

## Properties

### deviceDiscoveredCallback

• `Private` **deviceDiscoveredCallback**: `undefined` \| (`peripheral`: `Peripheral`, `manufacturerData`: `Uint8Array`) => `void`

#### Defined in

matter-node-ble.js/src/ble/NobleBleClient.ts:37

___

### discoveredPeripherals

• `Private` `Readonly` **discoveredPeripherals**: `Map`<`string`, { `matterServiceData`: `Uint8Array` ; `peripheral`: `Peripheral`  }\>

#### Defined in

matter-node-ble.js/src/ble/NobleBleClient.ts:30

___

### isScanning

• `Private` **isScanning**: `boolean` = `false`

#### Defined in

matter-node-ble.js/src/ble/NobleBleClient.ts:35

___

### nobleState

• `Private` **nobleState**: `string` = `"unknown"`

#### Defined in

matter-node-ble.js/src/ble/NobleBleClient.ts:36

___

### shouldScan

• `Private` **shouldScan**: `boolean` = `false`

#### Defined in

matter-node-ble.js/src/ble/NobleBleClient.ts:34

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

matter-node-ble.js/src/ble/NobleBleClient.ts:90

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

matter-node-ble.js/src/ble/NobleBleClient.ts:66

___

### startScanning

▸ **startScanning**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter-node-ble.js/src/ble/NobleBleClient.ts:73

___

### stopScanning

▸ **stopScanning**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter-node-ble.js/src/ble/NobleBleClient.ts:85
