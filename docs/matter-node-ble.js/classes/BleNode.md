[**@project-chip/matter-node-ble.js**](../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../globals.md) / BleNode

# Class: BleNode

## Extends

- [`Ble`](../-internal-/classes/Ble.md)

## Constructors

### new BleNode()

> **new BleNode**(`options`?): [`BleNode`](BleNode.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`BleOptions`](../globals.md#bleoptions) |

#### Returns

[`BleNode`](BleNode.md)

#### Overrides

[`Ble`](../-internal-/classes/Ble.md).[`constructor`](../-internal-/classes/Ble.md#constructors)

#### Source

[matter-node-ble.js/src/ble/BleNode.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleNode.ts#L26)

## Properties

### bleCentral

> `private` **bleCentral**: `undefined` \| [`NobleBleClient`](../-internal-/classes/NobleBleClient.md)

#### Source

[matter-node-ble.js/src/ble/BleNode.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleNode.ts#L24)

***

### blePeripheral

> `private` **blePeripheral**: `undefined` \| [`BlenoBleServer`](../-internal-/classes/BlenoBleServer.md)

#### Source

[matter-node-ble.js/src/ble/BleNode.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleNode.ts#L23)

***

### options?

> `private` `optional` `readonly` **options**: [`BleOptions`](../globals.md#bleoptions)

#### Source

[matter-node-ble.js/src/ble/BleNode.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleNode.ts#L26)

***

### get()

> `static` **get**: () => [`Ble`](../-internal-/classes/Ble.md)

#### Returns

[`Ble`](../-internal-/classes/Ble.md)

#### Inherited from

[`Ble`](../-internal-/classes/Ble.md).[`get`](../-internal-/classes/Ble.md#get)

#### Source

matter.js/dist/esm/ble/Ble.d.ts:16

## Accessors

### enabled

> `get` `static` **enabled**(): `boolean`

#### Returns

`boolean`

#### Source

matter.js/dist/esm/ble/Ble.d.ts:17

## Methods

### getBleBroadcaster()

> **getBleBroadcaster**(`additionalAdvertisementData`?): [`InstanceBroadcaster`](../-internal-/interfaces/InstanceBroadcaster.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `additionalAdvertisementData`? | `Uint8Array` |

#### Returns

[`InstanceBroadcaster`](../-internal-/interfaces/InstanceBroadcaster.md)

#### Overrides

[`Ble`](../-internal-/classes/Ble.md).[`getBleBroadcaster`](../-internal-/classes/Ble.md#getblebroadcaster)

#### Source

[matter-node-ble.js/src/ble/BleNode.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleNode.ts#L44)

***

### getBleCentralInterface()

> **getBleCentralInterface**(): [`NetInterface`](../-internal-/interfaces/NetInterface.md)

#### Returns

[`NetInterface`](../-internal-/interfaces/NetInterface.md)

#### Overrides

[`Ble`](../-internal-/classes/Ble.md).[`getBleCentralInterface`](../-internal-/classes/Ble.md#getblecentralinterface)

#### Source

[matter-node-ble.js/src/ble/BleNode.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleNode.ts#L37)

***

### getBlePeripheralInterface()

> **getBlePeripheralInterface**(): [`TransportInterface`](../-internal-/interfaces/TransportInterface.md)

#### Returns

[`TransportInterface`](../-internal-/interfaces/TransportInterface.md)

#### Overrides

[`Ble`](../-internal-/classes/Ble.md).[`getBlePeripheralInterface`](../-internal-/classes/Ble.md#getbleperipheralinterface)

#### Source

[matter-node-ble.js/src/ble/BleNode.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleNode.ts#L30)

***

### getBleScanner()

> **getBleScanner**(): [`Scanner`](../-internal-/interfaces/Scanner.md)

#### Returns

[`Scanner`](../-internal-/interfaces/Scanner.md)

#### Overrides

[`Ble`](../-internal-/classes/Ble.md).[`getBleScanner`](../-internal-/classes/Ble.md#getblescanner)

#### Source

[matter-node-ble.js/src/ble/BleNode.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleNode.ts#L51)
