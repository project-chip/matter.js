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

[packages/matter.js/src/fabric/FabricManager.ts:37](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L37)

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

[packages/matter.js/src/fabric/FabricManager.ts:31](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L31)

___

### #fabricStorage

• `Private` **#fabricStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`any`\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:30](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L30)

___

### #fabrics

• `Private` `Readonly` **#fabrics**: `Map`\<[`FabricIndex`](../modules/datatype_export.md#fabricindex), [`Fabric`](fabric_export.Fabric.md)\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:28](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L28)

___

### #initializationDone

• `Private` **#initializationDone**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:29](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L29)

___

### #nextFabricIndex

• `Private` **#nextFabricIndex**: `number` = `1`

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:27](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L27)

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

[packages/matter.js/src/fabric/FabricManager.ts:48](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L48)

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

[packages/matter.js/src/fabric/FabricManager.ts:74](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L74)

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

[packages/matter.js/src/fabric/FabricManager.ts:119](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L119)

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

[packages/matter.js/src/fabric/FabricManager.ts:109](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L109)

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](fabric_export.Fabric.md)[]

#### Returns

[`Fabric`](fabric_export.Fabric.md)[]

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:105](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L105)

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:52](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L52)

___

### initFromStorage

▸ **initFromStorage**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:41](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L41)

___

### persistFabrics

▸ **persistFabrics**(): [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>

#### Defined in

[packages/matter.js/src/fabric/FabricManager.ts:63](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L63)

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

[packages/matter.js/src/fabric/FabricManager.ts:94](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L94)

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

[packages/matter.js/src/fabric/FabricManager.ts:140](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L140)

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

[packages/matter.js/src/fabric/FabricManager.ts:128](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/FabricManager.ts#L128)
