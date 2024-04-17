[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [ble/export](../modules/ble_export.md) / Ble

# Class: Ble

[ble/export](../modules/ble_export.md).Ble

## Table of contents

### Constructors

- [constructor](ble_export.Ble.md#constructor)

### Properties

- [get](ble_export.Ble.md#get)

### Accessors

- [enabled](ble_export.Ble.md#enabled)

### Methods

- [getBleBroadcaster](ble_export.Ble.md#getblebroadcaster)
- [getBleCentralInterface](ble_export.Ble.md#getblecentralinterface)
- [getBlePeripheralInterface](ble_export.Ble.md#getbleperipheralinterface)
- [getBleScanner](ble_export.Ble.md#getblescanner)

## Constructors

### constructor

• **new Ble**(): [`Ble`](ble_export.Ble.md)

#### Returns

[`Ble`](ble_export.Ble.md)

## Properties

### get

▪ `Static` **get**: () => [`Ble`](ble_export.Ble.md) = `BleDisabled`

#### Type declaration

▸ (): [`Ble`](ble_export.Ble.md)

##### Returns

[`Ble`](ble_export.Ble.md)

#### Defined in

[packages/matter.js/src/ble/Ble.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/ble/Ble.ts#L21)

## Accessors

### enabled

• `get` **enabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/ble/Ble.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/ble/Ble.ts#L23)

## Methods

### getBleBroadcaster

▸ **getBleBroadcaster**(`additionalAdvertisementData?`): [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `additionalAdvertisementData?` | `Uint8Array` |

#### Returns

[`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/ble/Ble.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/ble/Ble.ts#L29)

___

### getBleCentralInterface

▸ **getBleCentralInterface**(): [`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Returns

[`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Defined in

[packages/matter.js/src/ble/Ble.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/ble/Ble.ts#L28)

___

### getBlePeripheralInterface

▸ **getBlePeripheralInterface**(): [`TransportInterface`](../interfaces/common_export.TransportInterface.md)

#### Returns

[`TransportInterface`](../interfaces/common_export.TransportInterface.md)

#### Defined in

[packages/matter.js/src/ble/Ble.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/ble/Ble.ts#L27)

___

### getBleScanner

▸ **getBleScanner**(): [`Scanner`](../interfaces/common_export.Scanner.md)

#### Returns

[`Scanner`](../interfaces/common_export.Scanner.md)

#### Defined in

[packages/matter.js/src/ble/Ble.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/ble/Ble.ts#L30)
