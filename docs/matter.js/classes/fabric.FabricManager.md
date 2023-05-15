[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [fabric](../modules/fabric.md) / FabricManager

# Class: FabricManager

[fabric](../modules/fabric.md).FabricManager

## Table of contents

### Constructors

- [constructor](fabric.FabricManager.md#constructor)

### Properties

- [fabricBuilder](fabric.FabricManager.md#fabricbuilder)
- [fabricStorage](fabric.FabricManager.md#fabricstorage)
- [fabrics](fabric.FabricManager.md#fabrics)
- [nextFabricIndex](fabric.FabricManager.md#nextfabricindex)

### Methods

- [addFabric](fabric.FabricManager.md#addfabric)
- [armFailSafe](fabric.FabricManager.md#armfailsafe)
- [completeCommission](fabric.FabricManager.md#completecommission)
- [findFabricFromDestinationId](fabric.FabricManager.md#findfabricfromdestinationid)
- [getFabricBuilder](fabric.FabricManager.md#getfabricbuilder)
- [getFabrics](fabric.FabricManager.md#getfabrics)
- [persistFabrics](fabric.FabricManager.md#persistfabrics)
- [removeFabric](fabric.FabricManager.md#removefabric)
- [tentativelyAddFabric](fabric.FabricManager.md#tentativelyaddfabric)

## Constructors

### constructor

• **new FabricManager**(`storageManager`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storageManager` | [`StorageManager`](storage.StorageManager.md) |

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/FabricManager.ts#L23)

## Properties

### fabricBuilder

• `Private` `Optional` **fabricBuilder**: [`FabricBuilder`](fabric.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:20](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/FabricManager.ts#L20)

___

### fabricStorage

• `Private` `Readonly` **fabricStorage**: [`StorageContext`](storage.StorageContext.md)

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/FabricManager.ts#L21)

___

### fabrics

• `Private` `Readonly` **fabrics**: [`Fabric`](fabric.Fabric.md)[]

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/FabricManager.ts#L19)

___

### nextFabricIndex

• `Private` **nextFabricIndex**: `number` = `1`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/FabricManager.ts#L18)

## Methods

### addFabric

▸ **addFabric**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric.Fabric.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:35](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/FabricManager.ts#L35)

___

### armFailSafe

▸ **armFailSafe**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:62](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/FabricManager.ts#L62)

___

### completeCommission

▸ **completeCommission**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:78](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/FabricManager.ts#L78)

___

### findFabricFromDestinationId

▸ **findFabricFromDestinationId**(`destinationId`, `initiatorRandom`): [`Fabric`](fabric.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationId` | `Uint8Array` |
| `initiatorRandom` | `Uint8Array` |

#### Returns

[`Fabric`](fabric.Fabric.md)

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:52](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/FabricManager.ts#L52)

___

### getFabricBuilder

▸ **getFabricBuilder**(): [`FabricBuilder`](fabric.FabricBuilder.md)

#### Returns

[`FabricBuilder`](fabric.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:66](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/FabricManager.ts#L66)

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](fabric.Fabric.md)[]

#### Returns

[`Fabric`](fabric.Fabric.md)[]

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:48](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/FabricManager.ts#L48)

___

### persistFabrics

▸ **persistFabrics**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/FabricManager.ts#L30)

___

### removeFabric

▸ **removeFabric**(`fabricIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](datatype.FabricIndex.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/FabricManager.ts#L41)

___

### tentativelyAddFabric

▸ **tentativelyAddFabric**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:72](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/FabricManager.ts#L72)
