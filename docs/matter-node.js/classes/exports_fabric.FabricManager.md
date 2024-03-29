[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/fabric](../modules/exports_fabric.md) / FabricManager

# Class: FabricManager

[exports/fabric](../modules/exports_fabric.md).FabricManager

## Table of contents

### Constructors

- [constructor](exports_fabric.FabricManager.md#constructor)

### Properties

- [#private](exports_fabric.FabricManager.md##private)

### Accessors

- [events](exports_fabric.FabricManager.md#events)

### Methods

- [addFabric](exports_fabric.FabricManager.md#addfabric)
- [findFabricFromDestinationId](exports_fabric.FabricManager.md#findfabricfromdestinationid)
- [getFabrics](exports_fabric.FabricManager.md#getfabrics)
- [getNextFabricIndex](exports_fabric.FabricManager.md#getnextfabricindex)
- [initFromStorage](exports_fabric.FabricManager.md#initfromstorage)
- [persistFabrics](exports_fabric.FabricManager.md#persistfabrics)
- [removeFabric](exports_fabric.FabricManager.md#removefabric)
- [revokeFabric](exports_fabric.FabricManager.md#revokefabric)
- [updateFabric](exports_fabric.FabricManager.md#updatefabric)

## Constructors

### constructor

• **new FabricManager**(`fabricStorage`): [`FabricManager`](exports_fabric.FabricManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |

#### Returns

[`FabricManager`](exports_fabric.FabricManager.md)

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:25

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:24

## Accessors

### events

• `get` **events**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `added` | [`Observable`](../interfaces/util_export.Observable.md)\<[fabric: Fabric], `void`\> |
| `deleted` | [`Observable`](../interfaces/util_export.Observable.md)\<[fabric: Fabric], `void`\> |
| `updated` | [`Observable`](../interfaces/util_export.Observable.md)\<[fabric: Fabric], `void`\> |

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:27

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

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:34

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

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:37

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](exports_fabric.Fabric.md)[]

#### Returns

[`Fabric`](exports_fabric.Fabric.md)[]

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:36

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:32

___

### initFromStorage

▸ **initFromStorage**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:26

___

### persistFabrics

▸ **persistFabrics**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:33

___

### removeFabric

▸ **removeFabric**(`fabricIndex`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:35

___

### revokeFabric

▸ **revokeFabric**(`fabricIndex`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:39

___

### updateFabric

▸ **updateFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:38
