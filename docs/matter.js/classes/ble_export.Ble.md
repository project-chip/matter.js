[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [ble/export](../modules/ble_export.md) / Ble

# Class: Ble

[ble/export](../modules/ble_export.md).Ble

## Table of contents

### Constructors

- [constructor](ble_export.Ble.md#constructor)

### Properties

- [get](ble_export.Ble.md#get)

### Methods

- [getBleBroadcaster](ble_export.Ble.md#getblebroadcaster)
- [getBleCentralInterface](ble_export.Ble.md#getblecentralinterface)
- [getBlePeripheralInterface](ble_export.Ble.md#getbleperipheralinterface)
- [getBleScanner](ble_export.Ble.md#getblescanner)

## Constructors

### constructor

• **new Ble**()

## Properties

### get

▪ `Static` **get**: () => [`Ble`](ble_export.Ble.md)

#### Type declaration

▸ (): [`Ble`](ble_export.Ble.md)

##### Returns

[`Ble`](ble_export.Ble.md)

#### Defined in

[packages/matter.js/src/ble/Ble.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/Ble.ts#L17)

## Methods

### getBleBroadcaster

▸ `Abstract` **getBleBroadcaster**(`additionalAdvertisementData?`): [`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `additionalAdvertisementData?` | `Uint8Array` |

#### Returns

[`InstanceBroadcaster`](../interfaces/common_export.InstanceBroadcaster.md)

#### Defined in

[packages/matter.js/src/ble/Ble.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/Ble.ts#L23)

___

### getBleCentralInterface

▸ `Abstract` **getBleCentralInterface**(): [`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Returns

[`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Defined in

[packages/matter.js/src/ble/Ble.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/Ble.ts#L22)

___

### getBlePeripheralInterface

▸ `Abstract` **getBlePeripheralInterface**(): [`TransportInterface`](../interfaces/common_export.TransportInterface.md)

#### Returns

[`TransportInterface`](../interfaces/common_export.TransportInterface.md)

#### Defined in

[packages/matter.js/src/ble/Ble.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/Ble.ts#L21)

___

### getBleScanner

▸ `Abstract` **getBleScanner**(): [`Scanner`](../interfaces/common_export.Scanner.md)

#### Returns

[`Scanner`](../interfaces/common_export.Scanner.md)

#### Defined in

[packages/matter.js/src/ble/Ble.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/Ble.ts#L24)
