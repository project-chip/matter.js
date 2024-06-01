[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [ble/export](../README.md) / Ble

# Class: `abstract` Ble

## Constructors

### new Ble()

> **new Ble**(): [`Ble`](Ble.md)

#### Returns

[`Ble`](Ble.md)

## Properties

### get()

> `static` **get**: () => [`Ble`](Ble.md) = `BleDisabled`

#### Returns

[`Ble`](Ble.md)

#### Source

[packages/matter.js/src/ble/Ble.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/Ble.ts#L21)

## Accessors

### enabled

> `get` `static` **enabled**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/ble/Ble.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/Ble.ts#L23)

## Methods

### getBleBroadcaster()

> `abstract` **getBleBroadcaster**(`additionalAdvertisementData`?): [`InstanceBroadcaster`](../../../common/export/interfaces/InstanceBroadcaster.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `additionalAdvertisementData`? | `Uint8Array` |

#### Returns

[`InstanceBroadcaster`](../../../common/export/interfaces/InstanceBroadcaster.md)

#### Source

[packages/matter.js/src/ble/Ble.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/Ble.ts#L29)

***

### getBleCentralInterface()

> `abstract` **getBleCentralInterface**(): [`NetInterface`](../../../net/export/interfaces/NetInterface.md)

#### Returns

[`NetInterface`](../../../net/export/interfaces/NetInterface.md)

#### Source

[packages/matter.js/src/ble/Ble.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/Ble.ts#L28)

***

### getBlePeripheralInterface()

> `abstract` **getBlePeripheralInterface**(): [`TransportInterface`](../../../common/export/interfaces/TransportInterface.md)

#### Returns

[`TransportInterface`](../../../common/export/interfaces/TransportInterface.md)

#### Source

[packages/matter.js/src/ble/Ble.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/Ble.ts#L27)

***

### getBleScanner()

> `abstract` **getBleScanner**(): [`Scanner`](../../../common/export/interfaces/Scanner.md)

#### Returns

[`Scanner`](../../../common/export/interfaces/Scanner.md)

#### Source

[packages/matter.js/src/ble/Ble.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/Ble.ts#L30)
