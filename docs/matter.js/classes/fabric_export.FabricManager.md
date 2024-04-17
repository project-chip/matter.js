[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [fabric/export](../modules/fabric_export.md) / FabricManager

# Class: FabricManager

[fabric/export](../modules/fabric_export.md).FabricManager

## Table of contents

### Constructors

- [constructor](fabric_export.FabricManager.md#constructor)

### Properties

- [#events](fabric_export.FabricManager.md##events)
- [#fabricStorage](fabric_export.FabricManager.md##fabricstorage)
- [#fabrics](fabric_export.FabricManager.md##fabrics)
- [#initializationDone](fabric_export.FabricManager.md##initializationdone)
- [#nextFabricIndex](fabric_export.FabricManager.md##nextfabricindex)

### Accessors

- [events](fabric_export.FabricManager.md#events)

### Methods

- [addFabric](fabric_export.FabricManager.md#addfabric)
- [findFabricFromDestinationId](fabric_export.FabricManager.md#findfabricfromdestinationid)
- [getFabrics](fabric_export.FabricManager.md#getfabrics)
- [getNextFabricIndex](fabric_export.FabricManager.md#getnextfabricindex)
- [initFromStorage](fabric_export.FabricManager.md#initfromstorage)
- [persistFabrics](fabric_export.FabricManager.md#persistfabrics)
- [removeFabric](fabric_export.FabricManager.md#removefabric)
- [revokeFabric](fabric_export.FabricManager.md#revokefabric)
- [updateFabric](fabric_export.FabricManager.md#updatefabric)

## Constructors

### constructor

• **new FabricManager**(`fabricStorage`): [`FabricManager`](fabric_export.FabricManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |

#### Returns

[`FabricManager`](fabric_export.FabricManager.md)

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L36)

## Properties

### #events

• `Private` **#events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `added` | [`Observable`](../interfaces/util_export.Observable.md)\<[fabric: Fabric], `void`\> |
| `deleted` | [`Observable`](../interfaces/util_export.Observable.md)\<[fabric: Fabric], `void`\> |
| `updated` | [`Observable`](../interfaces/util_export.Observable.md)\<[fabric: Fabric], `void`\> |

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L30)

___

### #fabricStorage

• `Private` **#fabricStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L29)

___

### #fabrics

• `Private` `Readonly` **#fabrics**: `Map`\<[`FabricIndex`](../modules/datatype_export.md#fabricindex), [`Fabric`](fabric_export.Fabric.md)\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L27)

___

### #initializationDone

• `Private` **#initializationDone**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L28)

___

### #nextFabricIndex

• `Private` **#nextFabricIndex**: `number` = `1`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L26)

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

[packages/matter.js/src/fabric/FabricManager.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L47)

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

[packages/matter.js/src/fabric/FabricManager.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L73)

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

[packages/matter.js/src/fabric/FabricManager.ts:108](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L108)

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](fabric_export.Fabric.md)[]

#### Returns

[`Fabric`](fabric_export.Fabric.md)[]

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:104](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L104)

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L51)

___

### initFromStorage

▸ **initFromStorage**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L40)

___

### persistFabrics

▸ **persistFabrics**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L62)

___

### removeFabric

▸ **removeFabric**(`fabricIndex`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L93)

___

### revokeFabric

▸ **revokeFabric**(`fabricIndex`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L130)

___

### updateFabric

▸ **updateFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:118](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/fabric/FabricManager.ts#L118)
