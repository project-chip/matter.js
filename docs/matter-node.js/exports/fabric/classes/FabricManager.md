[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/fabric](../README.md) / FabricManager

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

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:26

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:25

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

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:28

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

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:35

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

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:39

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

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:38

***

### getFabrics()

> **getFabrics**(): [`Fabric`](Fabric.md)[]

#### Returns

[`Fabric`](Fabric.md)[]

#### Source

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:37

***

### getNextFabricIndex()

> **getNextFabricIndex**(): [`FabricIndex`](../../datatype/README.md#fabricindex)

#### Returns

[`FabricIndex`](../../datatype/README.md#fabricindex)

#### Source

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:33

***

### initFromStorage()

> **initFromStorage**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:27

***

### persistFabrics()

> **persistFabrics**(): [`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../../../util/export/README.md#maybepromiset)\<`void`\>

#### Source

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:34

***

### removeFabric()

> **removeFabric**(`fabricIndex`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../../datatype/README.md#fabricindex) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:36

***

### revokeFabric()

> **revokeFabric**(`fabricIndex`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../../datatype/README.md#fabricindex) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:41

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

packages/matter.js/dist/esm/fabric/FabricManager.d.ts:40
