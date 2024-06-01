[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/interaction](../README.md) / EventHandler

# Class: EventHandler\<S\>

Class that collects all triggered events up to a certain limit of events and handle logic
to handle subscriptions (TBD)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `S` *extends* [`Storage`](../../../storage/export/interfaces/Storage.md) | `any` |

## Constructors

### new EventHandler()

> **new EventHandler**\<`S`\>(`eventStorage`): [`EventHandler`](EventHandler.md)\<`S`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventStorage` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`S`\> |

#### Returns

[`EventHandler`](EventHandler.md)\<`S`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:46

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:39

***

### eventNumber

> `private` **eventNumber**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:41

***

### eventStorage

> `private` `readonly` **eventStorage**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:40

***

### events

> `private` `readonly` **events**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:43

***

### storedEventCount

> `private` **storedEventCount**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:42

## Accessors

### construction

> `get` **construction**(): [`AsyncConstruction`](../../cluster/-internal-/interfaces/AsyncConstruction.md)\<[`EventHandler`](EventHandler.md)\<`any`\>\>

#### Returns

[`AsyncConstruction`](../../cluster/-internal-/interfaces/AsyncConstruction.md)\<[`EventHandler`](EventHandler.md)\<`any`\>\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:44

## Methods

### cleanUpEvents()

> **cleanUpEvents**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:49

***

### getEvents()

> **getEvents**(`eventPath`, `filters`?, `filterForFabricIndex`?): [`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventPath` | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\> |
| `filters`? | [`TypeFromFields`](../../tlv/README.md#typefromfieldsf)\<`object`\>[] |
| `filterForFabricIndex`? | [`FabricIndex`](../../datatype/README.md#fabricindex) |

#### Returns

[`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:47

***

### pushEvent()

> **pushEvent**(`event`): [`StorageOperationResult`](../../../storage/export/README.md#storageoperationresultst)\<`S`, [`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`EventData`](../interfaces/EventData.md)\<`any`\> |

#### Returns

[`StorageOperationResult`](../../../storage/export/README.md#storageoperationresultst)\<`S`, [`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:48

***

### create()

> `static` **create**(`eventStorage`): `Promise`\<[`EventHandler`](EventHandler.md)\<`any`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventStorage` | [`StorageContext`](../../../storage/export/classes/StorageContext.md)\<`any`\> |

#### Returns

`Promise`\<[`EventHandler`](EventHandler.md)\<`any`\>\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:45
