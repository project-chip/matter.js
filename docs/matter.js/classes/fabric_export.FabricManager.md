[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [fabric/export](../modules/fabric_export.md) / FabricManager

# Class: FabricManager

[fabric/export](../modules/fabric_export.md).FabricManager

## Table of contents

### Constructors

- [constructor](fabric_export.FabricManager.md#constructor)

### Properties

- [fabricRemoveCallback](fabric_export.FabricManager.md#fabricremovecallback)
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

• **new FabricManager**(`storage`, `fabricRemoveCallback?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |
| `fabricRemoveCallback?` | (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex), `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid)) => `void` |

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:23](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/fabric/FabricManager.ts#L23)

## Properties

### fabricRemoveCallback

• `Private` `Optional` `Readonly` **fabricRemoveCallback**: (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex), `peerNodeId`: [`NodeId`](../modules/datatype_export.md#nodeid)) => `void`

#### Type declaration

▸ (`fabricIndex`, `peerNodeId`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:25](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/fabric/FabricManager.ts#L25)

___

### fabricStorage

• `Private` `Readonly` **fabricStorage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:21](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/fabric/FabricManager.ts#L21)

___

### fabrics

• `Private` `Readonly` **fabrics**: `Map`<[`FabricIndex`](../modules/datatype_export.md#fabricindex), [`Fabric`](fabric_export.Fabric.md)\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:20](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/fabric/FabricManager.ts#L20)

___

### nextFabricIndex

• `Private` **nextFabricIndex**: `number` = `1`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:19](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/fabric/FabricManager.ts#L19)

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

[packages/matter.js/src/fabric/FabricManager.ts:52](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/fabric/FabricManager.ts#L52)

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

[packages/matter.js/src/fabric/FabricManager.ts:77](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/fabric/FabricManager.ts#L77)

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](fabric_export.Fabric.md)[]

#### Returns

[`Fabric`](fabric_export.Fabric.md)[]

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:73](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/fabric/FabricManager.ts#L73)

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:33](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/fabric/FabricManager.ts#L33)

___

### persistFabrics

▸ **persistFabrics**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:44](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/fabric/FabricManager.ts#L44)

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

[packages/matter.js/src/fabric/FabricManager.ts:62](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/fabric/FabricManager.ts#L62)

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

[packages/matter.js/src/fabric/FabricManager.ts:97](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/fabric/FabricManager.ts#L97)

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

[packages/matter.js/src/fabric/FabricManager.ts:87](https://github.com/project-chip/matter.js/blob/ac2c2688/packages/matter.js/src/fabric/FabricManager.ts#L87)
