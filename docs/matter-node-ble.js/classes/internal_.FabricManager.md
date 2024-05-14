[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / FabricManager

# Class: FabricManager

[\<internal\>](../modules/internal_.md).FabricManager

## Table of contents

### Constructors

- [constructor](internal_.FabricManager.md#constructor)

### Properties

- [#private](internal_.FabricManager.md##private)

### Accessors

- [events](internal_.FabricManager.md#events)

### Methods

- [addFabric](internal_.FabricManager.md#addfabric)
- [findByKeypair](internal_.FabricManager.md#findbykeypair)
- [findFabricFromDestinationId](internal_.FabricManager.md#findfabricfromdestinationid)
- [getFabrics](internal_.FabricManager.md#getfabrics)
- [getNextFabricIndex](internal_.FabricManager.md#getnextfabricindex)
- [initFromStorage](internal_.FabricManager.md#initfromstorage)
- [persistFabrics](internal_.FabricManager.md#persistfabrics)
- [removeFabric](internal_.FabricManager.md#removefabric)
- [revokeFabric](internal_.FabricManager.md#revokefabric)
- [updateFabric](internal_.FabricManager.md#updatefabric)

## Constructors

### constructor

• **new FabricManager**(`fabricStorage`): [`FabricManager`](internal_.FabricManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricStorage` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |

#### Returns

[`FabricManager`](internal_.FabricManager.md)

#### Defined in

matter.js/dist/esm/fabric/FabricManager.d.ts:26

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

matter.js/dist/esm/fabric/FabricManager.d.ts:25

## Accessors

### events

• `get` **events**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `added` | [`Observable`](../interfaces/internal_.Observable.md)\<[fabric: Fabric], `void`\> |
| `deleted` | [`Observable`](../interfaces/internal_.Observable.md)\<[fabric: Fabric], `void`\> |
| `updated` | [`Observable`](../interfaces/internal_.Observable.md)\<[fabric: Fabric], `void`\> |

#### Defined in

matter.js/dist/esm/fabric/FabricManager.d.ts:28

## Methods

### addFabric

▸ **addFabric**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/fabric/FabricManager.d.ts:35

___

### findByKeypair

▸ **findByKeypair**(`keypair`): `undefined` \| [`Fabric`](internal_.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keypair` | [`Key`](../interfaces/internal_.Key.md) |

#### Returns

`undefined` \| [`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/esm/fabric/FabricManager.d.ts:39

___

### findFabricFromDestinationId

▸ **findFabricFromDestinationId**(`destinationId`, `initiatorRandom`): [`Fabric`](internal_.Fabric.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destinationId` | `Uint8Array` |
| `initiatorRandom` | `Uint8Array` |

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/esm/fabric/FabricManager.d.ts:38

___

### getFabrics

▸ **getFabrics**(): [`Fabric`](internal_.Fabric.md)[]

#### Returns

[`Fabric`](internal_.Fabric.md)[]

#### Defined in

matter.js/dist/esm/fabric/FabricManager.d.ts:37

___

### getNextFabricIndex

▸ **getNextFabricIndex**(): [`FabricIndex`](../modules/internal_.md#fabricindex)

#### Returns

[`FabricIndex`](../modules/internal_.md#fabricindex)

#### Defined in

matter.js/dist/esm/fabric/FabricManager.d.ts:33

___

### initFromStorage

▸ **initFromStorage**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/fabric/FabricManager.d.ts:27

___

### persistFabrics

▸ **persistFabrics**(): [`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Returns

[`MaybePromise`](../modules/internal_.md#maybepromise)\<`void`\>

#### Defined in

matter.js/dist/esm/fabric/FabricManager.d.ts:34

___

### removeFabric

▸ **removeFabric**(`fabricIndex`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/internal_.md#fabricindex) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/fabric/FabricManager.d.ts:36

___

### revokeFabric

▸ **revokeFabric**(`fabricIndex`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/internal_.md#fabricindex) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/fabric/FabricManager.d.ts:41

___

### updateFabric

▸ **updateFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/fabric/FabricManager.d.ts:40
