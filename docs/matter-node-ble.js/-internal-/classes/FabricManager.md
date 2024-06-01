[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / FabricManager

# Class: FabricManager

## Constructors

### new FabricManager()

> **new FabricManager**(`fabricStorage`): [`FabricManager`](FabricManager.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricStorage` | [`StorageContext`](StorageContext.md)\<`any`\> |

#### Returns

[`FabricManager`](FabricManager.md)

#### Source

matter.js/dist/esm/fabric/FabricManager.d.ts:26

## Properties

### #private

> `private` **#private**: `any`

#### Source

matter.js/dist/esm/fabric/FabricManager.d.ts:25

## Accessors

### events

> `get` **events**(): `object`

#### Returns

`object`

##### added

> **added**: [`Observable`](../interfaces/Observable.md)\<[[`Fabric`](Fabric.md)], `void`\>

##### deleted

> **deleted**: [`Observable`](../interfaces/Observable.md)\<[[`Fabric`](Fabric.md)], `void`\>

##### updated

> **updated**: [`Observable`](../interfaces/Observable.md)\<[[`Fabric`](Fabric.md)], `void`\>

#### Source

matter.js/dist/esm/fabric/FabricManager.d.ts:28

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

matter.js/dist/esm/fabric/FabricManager.d.ts:35

***

### findByKeypair()

> **findByKeypair**(`keypair`): `undefined` \| [`Fabric`](Fabric.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keypair` | [`Key`](../interfaces/Key.md) |

#### Returns

`undefined` \| [`Fabric`](Fabric.md)

#### Source

matter.js/dist/esm/fabric/FabricManager.d.ts:39

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

matter.js/dist/esm/fabric/FabricManager.d.ts:38

***

### getFabrics()

> **getFabrics**(): [`Fabric`](Fabric.md)[]

#### Returns

[`Fabric`](Fabric.md)[]

#### Source

matter.js/dist/esm/fabric/FabricManager.d.ts:37

***

### getNextFabricIndex()

> **getNextFabricIndex**(): [`FabricIndex`](../README.md#fabricindex-1)

#### Returns

[`FabricIndex`](../README.md#fabricindex-1)

#### Source

matter.js/dist/esm/fabric/FabricManager.d.ts:33

***

### initFromStorage()

> **initFromStorage**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/fabric/FabricManager.d.ts:27

***

### persistFabrics()

> **persistFabrics**(): [`MaybePromise`](../README.md#maybepromiset)\<`void`\>

#### Returns

[`MaybePromise`](../README.md#maybepromiset)\<`void`\>

#### Source

matter.js/dist/esm/fabric/FabricManager.d.ts:34

***

### removeFabric()

> **removeFabric**(`fabricIndex`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../README.md#fabricindex-1) |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/fabric/FabricManager.d.ts:36

***

### revokeFabric()

> **revokeFabric**(`fabricIndex`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../README.md#fabricindex-1) |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/fabric/FabricManager.d.ts:41

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

matter.js/dist/esm/fabric/FabricManager.d.ts:40
