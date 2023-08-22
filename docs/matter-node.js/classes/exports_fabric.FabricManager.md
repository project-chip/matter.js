[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/fabric](../modules/exports_fabric.md) / FabricManager

# Class: FabricManager

[exports/fabric](../modules/exports_fabric.md).FabricManager

## Table of contents

### Constructors

- [constructor](exports_fabric.FabricManager.md#constructor)

### Properties

- [fabricBuilder](exports_fabric.FabricManager.md#fabricbuilder)
- [fabricStorage](exports_fabric.FabricManager.md#fabricstorage)
- [fabrics](exports_fabric.FabricManager.md#fabrics)
- [nextFabricIndex](exports_fabric.FabricManager.md#nextfabricindex)

### Methods

- [addFabric](exports_fabric.FabricManager.md#addfabric)
- [armFailSafe](exports_fabric.FabricManager.md#armfailsafe)
- [completeCommission](exports_fabric.FabricManager.md#completecommission)
- [findFabricFromDestinationId](exports_fabric.FabricManager.md#findfabricfromdestinationid)
- [getFabricBuilder](exports_fabric.FabricManager.md#getfabricbuilder)
- [getFabrics](exports_fabric.FabricManager.md#getfabrics)
- [persistFabrics](exports_fabric.FabricManager.md#persistfabrics)
- [removeFabric](exports_fabric.FabricManager.md#removefabric)
- [tentativelyAddFabric](exports_fabric.FabricManager.md#tentativelyaddfabric)

## Constructors

### constructor

• **new FabricManager**(`storage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |

#### Defined in

packages/matter.js/dist/cjs/fabric/FabricManager.d.ts:19

## Properties

### fabricBuilder

• `Private` `Optional` **fabricBuilder**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/FabricManager.d.ts:17

___

### fabricStorage

• `Private` `Readonly` **fabricStorage**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/FabricManager.d.ts:18

___

### fabrics

• `Private` `Readonly` **fabrics**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/FabricManager.d.ts:16

___

### nextFabricIndex

• `Private` **nextFabricIndex**: `any`

#### Defined in

packages/matter.js/dist/cjs/fabric/FabricManager.d.ts:15

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

packages/matter.js/dist/cjs/fabric/FabricManager.d.ts:21

___

### armFailSafe

▸ **armFailSafe**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/fabric/FabricManager.d.ts:25

___

### completeCommission

▸ **completeCommission**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/fabric/FabricManager.d.ts:28

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

packages/matter.js/dist/cjs/fabric/FabricManager.d.ts:24

___

### getFabricBuilder

▸ **getFabricBuilder**(): [`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Returns

[`FabricBuilder`](exports_fabric.FabricBuilder.md)

#### Defined in

packages/matter.js/dist/cjs/fabric/FabricManager.d.ts:26

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](exports_fabric.Fabric.md)[]

#### Returns

[`Fabric`](exports_fabric.Fabric.md)[]

#### Defined in

packages/matter.js/dist/cjs/fabric/FabricManager.d.ts:23

___

### persistFabrics

▸ **persistFabrics**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/fabric/FabricManager.d.ts:20

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

packages/matter.js/dist/cjs/fabric/FabricManager.d.ts:22

___

### tentativelyAddFabric

▸ **tentativelyAddFabric**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/fabric/FabricManager.d.ts:27
