[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / BleNode

# Class: BleNode

## Hierarchy

- [`Ble`](internal_.Ble.md)

  ↳ **`BleNode`**

## Table of contents

### Constructors

- [constructor](BleNode.md#constructor)

### Properties

- [bleCentral](BleNode.md#blecentral)
- [blePeripheral](BleNode.md#bleperipheral)
- [options](BleNode.md#options)
- [get](BleNode.md#get)

### Methods

- [getBleBroadcaster](BleNode.md#getblebroadcaster)
- [getBleCentralInterface](BleNode.md#getblecentralinterface)
- [getBlePeripheralInterface](BleNode.md#getbleperipheralinterface)
- [getBleScanner](BleNode.md#getblescanner)

## Constructors

### constructor

• **new BleNode**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BleOptions`](../modules.md#bleoptions) |

#### Overrides

[Ble](internal_.Ble.md).[constructor](internal_.Ble.md#constructor)

#### Defined in

[matter-node-ble.js/src/ble/BleNode.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleNode.ts#L26)

## Properties

### bleCentral

• `Private` **bleCentral**: `undefined` \| [`NobleBleClient`](internal_.NobleBleClient.md)

#### Defined in

[matter-node-ble.js/src/ble/BleNode.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleNode.ts#L24)

___

### blePeripheral

• `Private` **blePeripheral**: `undefined` \| [`BlenoBleServer`](internal_.BlenoBleServer.md)

#### Defined in

[matter-node-ble.js/src/ble/BleNode.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleNode.ts#L23)

___

### options

• `Private` `Optional` `Readonly` **options**: [`BleOptions`](../modules.md#bleoptions)

#### Defined in

[matter-node-ble.js/src/ble/BleNode.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleNode.ts#L26)

___

### get

▪ `Static` **get**: () => [`Ble`](internal_.Ble.md)

#### Type declaration

▸ (): [`Ble`](internal_.Ble.md)

##### Returns

[`Ble`](internal_.Ble.md)

#### Inherited from

[Ble](internal_.Ble.md).[get](internal_.Ble.md#get)

#### Defined in

matter.js/dist/cjs/ble/Ble.d.ts:15

## Methods

### getBleBroadcaster

▸ **getBleBroadcaster**(`additionalAdvertisementData?`): [`InstanceBroadcaster`](../interfaces/internal_.InstanceBroadcaster.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `additionalAdvertisementData?` | `Uint8Array` |

#### Returns

[`InstanceBroadcaster`](../interfaces/internal_.InstanceBroadcaster.md)

#### Overrides

[Ble](internal_.Ble.md).[getBleBroadcaster](internal_.Ble.md#getblebroadcaster)

#### Defined in

[matter-node-ble.js/src/ble/BleNode.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleNode.ts#L44)

___

### getBleCentralInterface

▸ **getBleCentralInterface**(): [`NetInterface`](../interfaces/internal_.NetInterface.md)

#### Returns

[`NetInterface`](../interfaces/internal_.NetInterface.md)

#### Overrides

[Ble](internal_.Ble.md).[getBleCentralInterface](internal_.Ble.md#getblecentralinterface)

#### Defined in

[matter-node-ble.js/src/ble/BleNode.ts:37](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleNode.ts#L37)

___

### getBlePeripheralInterface

▸ **getBlePeripheralInterface**(): [`TransportInterface`](../interfaces/internal_.TransportInterface.md)

#### Returns

[`TransportInterface`](../interfaces/internal_.TransportInterface.md)

#### Overrides

[Ble](internal_.Ble.md).[getBlePeripheralInterface](internal_.Ble.md#getbleperipheralinterface)

#### Defined in

[matter-node-ble.js/src/ble/BleNode.ts:30](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleNode.ts#L30)

___

### getBleScanner

▸ **getBleScanner**(): [`Scanner`](../interfaces/internal_.Scanner.md)

#### Returns

[`Scanner`](../interfaces/internal_.Scanner.md)

#### Overrides

[Ble](internal_.Ble.md).[getBleScanner](internal_.Ble.md#getblescanner)

#### Defined in

[matter-node-ble.js/src/ble/BleNode.ts:51](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleNode.ts#L51)
