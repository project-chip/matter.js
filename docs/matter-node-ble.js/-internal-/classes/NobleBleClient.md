[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / NobleBleClient

# Class: NobleBleClient

## Constructors

### new NobleBleClient()

> **new NobleBleClient**(`options`?): [`NobleBleClient`](NobleBleClient.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`BleOptions`](../../globals.md#bleoptions) |

#### Returns

[`NobleBleClient`](NobleBleClient.md)

#### Source

[matter-node-ble.js/src/ble/NobleBleClient.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L40)

## Properties

### deviceDiscoveredCallback

> `private` **deviceDiscoveredCallback**: `undefined` \| (`peripheral`, `manufacturerData`) => `void`

#### Source

[matter-node-ble.js/src/ble/NobleBleClient.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L38)

***

### discoveredPeripherals

> `private` `readonly` **discoveredPeripherals**: `Map`\<`string`, `object`\>

#### Source

[matter-node-ble.js/src/ble/NobleBleClient.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L31)

***

### isScanning

> `private` **isScanning**: `boolean` = `false`

#### Source

[matter-node-ble.js/src/ble/NobleBleClient.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L36)

***

### nobleState

> `private` **nobleState**: `string` = `"unknown"`

#### Source

[matter-node-ble.js/src/ble/NobleBleClient.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L37)

***

### shouldScan

> `private` **shouldScan**: `boolean` = `false`

#### Source

[matter-node-ble.js/src/ble/NobleBleClient.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L35)

## Methods

### handleDiscoveredDevice()

> `private` **handleDiscoveredDevice**(`peripheral`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peripheral` | `Peripheral` |

#### Returns

`void`

#### Source

[matter-node-ble.js/src/ble/NobleBleClient.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L92)

***

### setDiscoveryCallback()

> **setDiscoveryCallback**(`callback`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | (`peripheral`, `manufacturerData`) => `void` |

#### Returns

`void`

#### Source

[matter-node-ble.js/src/ble/NobleBleClient.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L67)

***

### startScanning()

> **startScanning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[matter-node-ble.js/src/ble/NobleBleClient.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L74)

***

### stopScanning()

> **stopScanning**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[matter-node-ble.js/src/ble/NobleBleClient.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/NobleBleClient.ts#L86)
