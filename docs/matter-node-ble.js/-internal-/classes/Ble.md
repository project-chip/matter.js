[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / Ble

# Class: `abstract` Ble

## Extended by

- [`BleNode`](../../classes/BleNode.md)

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

> `abstract` **getBleBroadcaster**(`additionalAdvertisementData`?): [`InstanceBroadcaster`](../interfaces/InstanceBroadcaster.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `additionalAdvertisementData`? | `Uint8Array` |

#### Returns

[`InstanceBroadcaster`](../interfaces/InstanceBroadcaster.md)

#### Source

matter.js/dist/esm/ble/Ble.d.ts:20

***

### getBleCentralInterface()

> `abstract` **getBleCentralInterface**(): [`NetInterface`](../interfaces/NetInterface.md)

#### Returns

[`NetInterface`](../interfaces/NetInterface.md)

#### Source

matter.js/dist/esm/ble/Ble.d.ts:19

***

### getBlePeripheralInterface()

> `abstract` **getBlePeripheralInterface**(): [`TransportInterface`](../interfaces/TransportInterface.md)

#### Returns

[`TransportInterface`](../interfaces/TransportInterface.md)

#### Source

matter.js/dist/esm/ble/Ble.d.ts:18

***

### getBleScanner()

> `abstract` **getBleScanner**(): [`Scanner`](../interfaces/Scanner.md)

#### Returns

[`Scanner`](../interfaces/Scanner.md)

#### Source

matter.js/dist/esm/ble/Ble.d.ts:21
