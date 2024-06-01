[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [fabric/export](../README.md) / FabricManager

# Class: FabricManager

## Constructors

### new FabricManager()

> **new FabricManager**(`fabricStorage`): [`FabricManager`](FabricManager.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricStorage` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> |

#### Returns

[`FabricManager`](FabricManager.md)

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L37)

## Properties

### #events

> `private` **#events**: `object`

#### added

> **added**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`Fabric`](Fabric.md)], `void`\>

#### deleted

> **deleted**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`Fabric`](Fabric.md)], `void`\>

#### updated

> **updated**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`Fabric`](Fabric.md)], `void`\>

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L31)

***

### #fabricStorage

> `private` **#fabricStorage**: [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\>

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L30)

***

### #fabrics

> `private` `readonly` **#fabrics**: `Map`\<[`FabricIndex`](../../../datatype/export/README.md#fabricindex), [`Fabric`](Fabric.md)\>

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L28)

***

### #initializationDone

> `private` **#initializationDone**: `boolean` = `false`

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L29)

***

### #nextFabricIndex

> `private` **#nextFabricIndex**: `number` = `1`

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L27)

## Accessors

### events

> `get` **events**(): `object`

#### Returns

`object`

##### added

> **added**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`Fabric`](Fabric.md)], `void`\>

##### deleted

> **deleted**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`Fabric`](Fabric.md)], `void`\>

##### updated

> **updated**: [`Observable`](../../../util/export/interfaces/Observable.md)\<[[`Fabric`](Fabric.md)], `void`\>

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L48)

## Methods

### addFabric()

> **addFabric**(`fabric`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](Fabric.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L74)

***

### findByKeypair()

> **findByKeypair**(`keypair`): `undefined` \| [`Fabric`](Fabric.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keypair` | [`Key`](../../../crypto/export/interfaces/Key.md) |

#### Returns

`undefined` \| [`Fabric`](Fabric.md)

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:119](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L119)

***

### findFabricFromDestinationId()

> **findFabricFromDestinationId**(`destinationId`, `initiatorRandom`): [`Fabric`](Fabric.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `destinationId` | `Uint8Array` |
| `initiatorRandom` | `Uint8Array` |

#### Returns

[`Fabric`](Fabric.md)

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:109](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L109)

***

### getFabrics()

> **getFabrics**(): [`Fabric`](Fabric.md)[]

#### Returns

[`Fabric`](Fabric.md)[]

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L105)

***

### getNextFabricIndex()

> **getNextFabricIndex**(): [`FabricIndex`](../../../datatype/export/README.md#fabricindex)

#### Returns

[`FabricIndex`](../../../datatype/export/README.md#fabricindex)

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L52)

***

### initFromStorage()

> **initFromStorage**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L41)

***

### persistFabrics()

> **persistFabrics**(): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L63)

***

### removeFabric()

> **removeFabric**(`fabricIndex`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../../../datatype/export/README.md#fabricindex) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L94)

***

### revokeFabric()

> **revokeFabric**(`fabricIndex`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../../../datatype/export/README.md#fabricindex) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L140)

***

### updateFabric()

> **updateFabric**(`fabric`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/fabric/FabricManager.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/fabric/FabricManager.ts#L128)
