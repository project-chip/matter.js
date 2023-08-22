[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [fabric/export](../modules/fabric_export.md) / FabricManager

# Class: FabricManager

[fabric/export](../modules/fabric_export.md).FabricManager

## Table of contents

### Constructors

- [constructor](fabric_export.FabricManager.md#constructor)

### Properties

- [fabricBuilder](fabric_export.FabricManager.md#fabricbuilder)
- [fabricStorage](fabric_export.FabricManager.md#fabricstorage)
- [fabrics](fabric_export.FabricManager.md#fabrics)
- [nextFabricIndex](fabric_export.FabricManager.md#nextfabricindex)

### Methods

- [addFabric](fabric_export.FabricManager.md#addfabric)
- [armFailSafe](fabric_export.FabricManager.md#armfailsafe)
- [completeCommission](fabric_export.FabricManager.md#completecommission)
- [findFabricFromDestinationId](fabric_export.FabricManager.md#findfabricfromdestinationid)
- [getFabricBuilder](fabric_export.FabricManager.md#getfabricbuilder)
- [getFabrics](fabric_export.FabricManager.md#getfabrics)
- [persistFabrics](fabric_export.FabricManager.md#persistfabrics)
- [removeFabric](fabric_export.FabricManager.md#removefabric)
- [tentativelyAddFabric](fabric_export.FabricManager.md#tentativelyaddfabric)

## Constructors

### constructor

• **new FabricManager**(`storage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/FabricManager.ts#L22)

## Properties

### fabricBuilder

• `Private` `Optional` **fabricBuilder**: [`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/FabricManager.ts#L19)

___

### fabricStorage

• `Private` `Readonly` **fabricStorage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:20](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/FabricManager.ts#L20)

___

### fabrics

• `Private` `Readonly` **fabrics**: [`Fabric`](fabric_export.Fabric.md)[]

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/FabricManager.ts#L18)

___

### nextFabricIndex

• `Private` **nextFabricIndex**: `number` = `1`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/FabricManager.ts#L17)

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

[packages/matter.js/src/fabric/FabricManager.ts:37](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/FabricManager.ts#L37)

___

### armFailSafe

▸ **armFailSafe**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:67](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/FabricManager.ts#L67)

___

### completeCommission

▸ **completeCommission**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:83](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/FabricManager.ts#L83)

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

[packages/matter.js/src/fabric/FabricManager.ts:57](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/FabricManager.ts#L57)

___

### getFabricBuilder

▸ **getFabricBuilder**(): [`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Returns

[`FabricBuilder`](fabric_export.FabricBuilder.md)

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:71](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/FabricManager.ts#L71)

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](fabric_export.Fabric.md)[]

#### Returns

[`Fabric`](fabric_export.Fabric.md)[]

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:53](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/FabricManager.ts#L53)

___

### persistFabrics

▸ **persistFabrics**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/FabricManager.ts#L29)

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

[packages/matter.js/src/fabric/FabricManager.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/FabricManager.ts#L43)

___

### tentativelyAddFabric

▸ **tentativelyAddFabric**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:77](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/FabricManager.ts#L77)
