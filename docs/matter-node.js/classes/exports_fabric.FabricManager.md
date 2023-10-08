[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/fabric](../modules/exports_fabric.md) / FabricManager

# Class: FabricManager

[exports/fabric](../modules/exports_fabric.md).FabricManager

## Table of contents

### Constructors

- [constructor](exports_fabric.FabricManager.md#constructor)

### Properties

- [fabricStorage](exports_fabric.FabricManager.md#fabricstorage)
- [fabrics](exports_fabric.FabricManager.md#fabrics)
- [nextFabricIndex](exports_fabric.FabricManager.md#nextfabricindex)

### Methods

- [addFabric](exports_fabric.FabricManager.md#addfabric)
- [findFabricFromDestinationId](exports_fabric.FabricManager.md#findfabricfromdestinationid)
- [getFabrics](exports_fabric.FabricManager.md#getfabrics)
- [getNextFabricIndex](exports_fabric.FabricManager.md#getnextfabricindex)
- [persistFabrics](exports_fabric.FabricManager.md#persistfabrics)
- [removeFabric](exports_fabric.FabricManager.md#removefabric)
- [revokeFabric](exports_fabric.FabricManager.md#revokefabric)
- [updateFabric](exports_fabric.FabricManager.md#updatefabric)

## Constructors

### constructor

• **new FabricManager**(`storage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:20

## Properties

### fabricStorage

• `Private` `Readonly` **fabricStorage**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:19

___

### fabrics

• `Private` `Readonly` **fabrics**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:18

___

### nextFabricIndex

• `Private` **nextFabricIndex**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:17

## Methods

### addFabric

▸ **addFabric**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:23

___

### findFabricFromDestinationId

▸ **findFabricFromDestinationId**(`destinationId`, `initiatorRandom`): [`Fabric`](exports_fabric.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationId` | `Uint8Array` |
| `initiatorRandom` | `Uint8Array` |

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:26

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](exports_fabric.Fabric.md)[]

#### Returns

[`Fabric`](exports_fabric.Fabric.md)[]

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:25

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:21

___

### persistFabrics

▸ **persistFabrics**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:22

___

### removeFabric

▸ **removeFabric**(`fabricIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:24

___

### revokeFabric

▸ **revokeFabric**(`fabricIndex`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:28

___

### updateFabric

▸ **updateFabric**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:27
