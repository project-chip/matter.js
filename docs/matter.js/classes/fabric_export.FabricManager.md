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
- [findByKeypair](fabric_export.FabricManager.md#findbykeypair)
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

[packages/matter.js/src/fabric/FabricManager.ts:38](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L38)

## Properties

### #events

• `Private` **#events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `added` | [`Observable`](../interfaces/util_export.Observable.md)\<[fabric: Fabric], `void`\> |
| `deleted` | [`Observable`](../interfaces/util_export.Observable.md)\<[fabric: Fabric], `void`\> |
| `failsafeClosed` | [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\> |
| `updated` | [`Observable`](../interfaces/util_export.Observable.md)\<[fabric: Fabric], `void`\> |

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:31](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L31)

___

### #fabricStorage

• `Private` **#fabricStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:30](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L30)

___

### #fabrics

• `Private` `Readonly` **#fabrics**: `Map`\<[`FabricIndex`](../modules/datatype_export.md#fabricindex), [`Fabric`](fabric_export.Fabric.md)\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:28](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L28)

___

### #initializationDone

• `Private` **#initializationDone**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:29](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L29)

___

### #nextFabricIndex

• `Private` **#nextFabricIndex**: `number` = `1`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:27](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L27)

## Accessors

### events

• `get` **events**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `added` | [`Observable`](../interfaces/util_export.Observable.md)\<[fabric: Fabric], `void`\> |
| `deleted` | [`Observable`](../interfaces/util_export.Observable.md)\<[fabric: Fabric], `void`\> |
| `failsafeClosed` | [`Observable`](../interfaces/util_export.Observable.md)\<[], `void`\> |
| `updated` | [`Observable`](../interfaces/util_export.Observable.md)\<[fabric: Fabric], `void`\> |

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:49](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L49)

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

[packages/matter.js/src/fabric/FabricManager.ts:75](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L75)

___

### findByKeypair

▸ **findByKeypair**(`keypair`): `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keypair` | [`Key`](../interfaces/crypto_export.Key.md) |

#### Returns

`undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:120](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L120)

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

[packages/matter.js/src/fabric/FabricManager.ts:110](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L110)

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](fabric_export.Fabric.md)[]

#### Returns

[`Fabric`](fabric_export.Fabric.md)[]

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:106](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L106)

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:53](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L53)

___

### initFromStorage

▸ **initFromStorage**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:42](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L42)

___

### persistFabrics

▸ **persistFabrics**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:64](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L64)

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

[packages/matter.js/src/fabric/FabricManager.ts:95](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L95)

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

[packages/matter.js/src/fabric/FabricManager.ts:141](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L141)

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

[packages/matter.js/src/fabric/FabricManager.ts:129](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/fabric/FabricManager.ts#L129)
