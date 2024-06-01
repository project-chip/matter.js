[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/ble](../README.md) / Ble

# Class: `abstract` Ble

## Constructors

### new Ble()

> **new Ble**(): [`Ble`](Ble.md)

#### Returns

[`Ble`](Ble.md)

## Properties

### get()

> `static` **get**: () => [`Ble`](Ble.md)

#### Returns

[`Ble`](Ble.md)

#### Source

packages/matter.js/dist/esm/ble/Ble.d.ts:16

## Accessors

### enabled

> `get` `static` **enabled**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/ble/Ble.d.ts:17

## Methods

### getBleBroadcaster()

> `abstract` **getBleBroadcaster**(`additionalAdvertisementData`?): [`InstanceBroadcaster`](../../common/interfaces/InstanceBroadcaster.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `additionalAdvertisementData`? | `Uint8Array` |

#### Returns

[`InstanceBroadcaster`](../../common/interfaces/InstanceBroadcaster.md)

#### Source

packages/matter.js/dist/esm/ble/Ble.d.ts:20

***

### getBleCentralInterface()

> `abstract` **getBleCentralInterface**(): [`NetInterface`](../../../net/export/interfaces/NetInterface.md)

#### Returns

[`NetInterface`](../../../net/export/interfaces/NetInterface.md)

#### Source

packages/matter.js/dist/esm/ble/Ble.d.ts:19

***

### getBlePeripheralInterface()

> `abstract` **getBlePeripheralInterface**(): [`TransportInterface`](../../common/interfaces/TransportInterface.md)

#### Returns

[`TransportInterface`](../../common/interfaces/TransportInterface.md)

#### Source

packages/matter.js/dist/esm/ble/Ble.d.ts:18

***

### getBleScanner()

> `abstract` **getBleScanner**(): [`Scanner`](../../common/interfaces/Scanner.md)

#### Returns

[`Scanner`](../../common/interfaces/Scanner.md)

#### Source

packages/matter.js/dist/esm/ble/Ble.d.ts:21
