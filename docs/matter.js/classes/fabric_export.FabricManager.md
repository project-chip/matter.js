[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [fabric/export](../modules/fabric_export.md) / FabricManager

# Class: FabricManager

[fabric/export](../modules/fabric_export.md).FabricManager

## Table of contents

### Constructors

- [constructor](fabric_export.FabricManager.md#constructor)

### Properties

- [fabricStorage](fabric_export.FabricManager.md#fabricstorage)
- [fabrics](fabric_export.FabricManager.md#fabrics)
- [nextFabricIndex](fabric_export.FabricManager.md#nextfabricindex)

### Methods

- [addFabric](fabric_export.FabricManager.md#addfabric)
- [findFabricFromDestinationId](fabric_export.FabricManager.md#findfabricfromdestinationid)
- [getFabrics](fabric_export.FabricManager.md#getfabrics)
- [getNextFabricIndex](fabric_export.FabricManager.md#getnextfabricindex)
- [persistFabrics](fabric_export.FabricManager.md#persistfabrics)
- [removeFabric](fabric_export.FabricManager.md#removefabric)
- [revokeFabric](fabric_export.FabricManager.md#revokefabric)
- [updateFabric](fabric_export.FabricManager.md#updatefabric)

## Constructors

### constructor

• **new FabricManager**(`storage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |

#### Defined in

packages/matter.js/src/fabric/FabricManager.ts:22

## Properties

### fabricStorage

• `Private` `Readonly` **fabricStorage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

packages/matter.js/src/fabric/FabricManager.ts:20

___

### fabrics

• `Private` `Readonly` **fabrics**: `Map`<[`FabricIndex`](../modules/datatype_export.md#fabricindex), [`Fabric`](fabric_export.Fabric.md)\>

#### Defined in

packages/matter.js/src/fabric/FabricManager.ts:19

___

### nextFabricIndex

• `Private` **nextFabricIndex**: `number` = `1`

#### Defined in

packages/matter.js/src/fabric/FabricManager.ts:18

## Methods

### addFabric

▸ **addFabric**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/FabricManager.ts:48

___

### findFabricFromDestinationId

▸ **findFabricFromDestinationId**(`destinationId`, `initiatorRandom`): [`Fabric`](fabric_export.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationId` | `Uint8Array` |
| `initiatorRandom` | `Uint8Array` |

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Defined in

packages/matter.js/src/fabric/FabricManager.ts:71

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](fabric_export.Fabric.md)[]

#### Returns

[`Fabric`](fabric_export.Fabric.md)[]

#### Defined in

packages/matter.js/src/fabric/FabricManager.ts:67

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

packages/matter.js/src/fabric/FabricManager.ts:29

___

### persistFabrics

▸ **persistFabrics**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/FabricManager.ts:40

___

### removeFabric

▸ **removeFabric**(`fabricIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/FabricManager.ts:58

___

### revokeFabric

▸ **revokeFabric**(`fabricIndex`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/fabric/FabricManager.ts:91

___

### updateFabric

▸ **updateFabric**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/src/fabric/FabricManager.ts:81
