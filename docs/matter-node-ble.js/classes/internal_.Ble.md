[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / Ble

# Class: Ble

[\<internal\>](../modules/internal_.md).Ble

## Hierarchy

- **`Ble`**

  ↳ [`BleNode`](BleNode.md)

## Table of contents

### Constructors

- [constructor](internal_.Ble.md#constructor)

### Properties

- [get](internal_.Ble.md#get)

### Accessors

- [enabled](internal_.Ble.md#enabled)

### Methods

- [getBleBroadcaster](internal_.Ble.md#getblebroadcaster)
- [getBleCentralInterface](internal_.Ble.md#getblecentralinterface)
- [getBlePeripheralInterface](internal_.Ble.md#getbleperipheralinterface)
- [getBleScanner](internal_.Ble.md#getblescanner)

## Constructors

### constructor

• **new Ble**(): [`Ble`](internal_.Ble.md)

#### Returns

[`Ble`](internal_.Ble.md)

## Properties

### get

▪ `Static` **get**: () => [`Ble`](internal_.Ble.md)

#### Type declaration

▸ (): [`Ble`](internal_.Ble.md)

##### Returns

[`Ble`](internal_.Ble.md)

#### Defined in

matter.js/dist/esm/ble/Ble.d.ts:16

## Accessors

### enabled

• `get` **enabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/ble/Ble.d.ts:17

## Methods

### getBleBroadcaster

▸ **getBleBroadcaster**(`additionalAdvertisementData?`): [`InstanceBroadcaster`](../interfaces/internal_.InstanceBroadcaster.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `additionalAdvertisementData?` | `Uint8Array` |

#### Returns

[`InstanceBroadcaster`](../interfaces/internal_.InstanceBroadcaster.md)

#### Defined in

matter.js/dist/esm/ble/Ble.d.ts:20

___

### getBleCentralInterface

▸ **getBleCentralInterface**(): [`NetInterface`](../interfaces/internal_.NetInterface.md)

#### Returns

[`NetInterface`](../interfaces/internal_.NetInterface.md)

#### Defined in

matter.js/dist/esm/ble/Ble.d.ts:19

___

### getBlePeripheralInterface

▸ **getBlePeripheralInterface**(): [`TransportInterface`](../interfaces/internal_.TransportInterface.md)

#### Returns

[`TransportInterface`](../interfaces/internal_.TransportInterface.md)

#### Defined in

matter.js/dist/esm/ble/Ble.d.ts:18

___

### getBleScanner

▸ **getBleScanner**(): [`Scanner`](../interfaces/internal_.Scanner.md)

#### Returns

[`Scanner`](../interfaces/internal_.Scanner.md)

#### Defined in

matter.js/dist/esm/ble/Ble.d.ts:21
