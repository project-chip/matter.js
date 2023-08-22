[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/ble](../modules/exports_ble.md) / Ble

# Class: Ble

[exports/ble](../modules/exports_ble.md).Ble

## Table of contents

### Constructors

- [constructor](exports_ble.Ble.md#constructor)

### Properties

- [get](exports_ble.Ble.md#get)

### Methods

- [getBleBroadcaster](exports_ble.Ble.md#getblebroadcaster)
- [getBleCentralInterface](exports_ble.Ble.md#getblecentralinterface)
- [getBlePeripheralInterface](exports_ble.Ble.md#getbleperipheralinterface)
- [getBleScanner](exports_ble.Ble.md#getblescanner)

## Constructors

### constructor

• **new Ble**()

## Properties

### get

▪ `Static` **get**: () => [`Ble`](exports_ble.Ble.md)

#### Type declaration

▸ (): [`Ble`](exports_ble.Ble.md)

##### Returns

[`Ble`](exports_ble.Ble.md)

#### Defined in

packages/matter.js/dist/cjs/ble/Ble.d.ts:15

## Methods

### getBleBroadcaster

▸ `Abstract` **getBleBroadcaster**(`additionalAdvertisementData?`): [`InstanceBroadcaster`](../interfaces/exports_common.InstanceBroadcaster.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `additionalAdvertisementData?` | `Uint8Array` |

#### Returns

[`InstanceBroadcaster`](../interfaces/exports_common.InstanceBroadcaster.md)

#### Defined in

packages/matter.js/dist/cjs/ble/Ble.d.ts:18

___

### getBleCentralInterface

▸ `Abstract` **getBleCentralInterface**(): [`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Returns

[`NetInterface`](../interfaces/net_export.NetInterface.md)

#### Defined in

packages/matter.js/dist/cjs/ble/Ble.d.ts:17

___

### getBlePeripheralInterface

▸ `Abstract` **getBlePeripheralInterface**(): [`TransportInterface`](../interfaces/exports_common.TransportInterface.md)

#### Returns

[`TransportInterface`](../interfaces/exports_common.TransportInterface.md)

#### Defined in

packages/matter.js/dist/cjs/ble/Ble.d.ts:16

___

### getBleScanner

▸ `Abstract` **getBleScanner**(): [`Scanner`](../interfaces/exports_common.Scanner.md)

#### Returns

[`Scanner`](../interfaces/exports_common.Scanner.md)

#### Defined in

packages/matter.js/dist/cjs/ble/Ble.d.ts:19
