[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/interaction/export](../README.md) / EventHandler

# Class: EventHandler\<S\>

Class that collects all triggered events up to a certain limit of events and handle logic
to handle subscriptions (TBD)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `S` *extends* [`Storage`](../../../../storage/export/interfaces/Storage.md) | `any` |

## Constructors

### new EventHandler()

> **new EventHandler**\<`S`\>(`eventStorage`): [`EventHandler`](EventHandler.md)\<`S`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventStorage` | [`StorageContext`](../../../../storage/export/classes/StorageContext.md)\<`S`\> |

#### Returns

[`EventHandler`](EventHandler.md)\<`S`\>

#### Source

[packages/matter.js/src/protocol/interaction/EventHandler.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventHandler.ts#L69)

## Properties

### #construction

> `private` **#construction**: [`AsyncConstruction`](../../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`EventHandler`](EventHandler.md)\<`any`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/EventHandler.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventHandler.ts#L57)

***

### eventNumber

> `private` **eventNumber**: [`EventNumber`](../../../../datatype/export/README.md#eventnumber)

#### Source

[packages/matter.js/src/protocol/interaction/EventHandler.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventHandler.ts#L50)

***

### eventStorage

> `private` `readonly` **eventStorage**: [`StorageContext`](../../../../storage/export/classes/StorageContext.md)\<`S`\>

#### Source

[packages/matter.js/src/protocol/interaction/EventHandler.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventHandler.ts#L69)

***

### events

> `private` `readonly` **events**: `object`

#### 0

> **0**: [`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]

#### 1

> **1**: [`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]

#### 2

> **2**: [`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]

#### Source

[packages/matter.js/src/protocol/interaction/EventHandler.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventHandler.ts#L52)

***

### storedEventCount

> `private` **storedEventCount**: `number` = `0`

#### Source

[packages/matter.js/src/protocol/interaction/EventHandler.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventHandler.ts#L51)

## Accessors

### construction

> `get` **construction**(): [`AsyncConstruction`](../../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`EventHandler`](EventHandler.md)\<`any`\>\>

#### Returns

[`AsyncConstruction`](../../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`EventHandler`](EventHandler.md)\<`any`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/EventHandler.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventHandler.ts#L59)

## Methods

### cleanUpEvents()

> **cleanUpEvents**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/EventHandler.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventHandler.ts#L132)

***

### getEvents()

> **getEvents**(`eventPath`, `filters`?, `filterForFabricIndex`?): [`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventPath` | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\> |
| `filters`? | [`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[] |
| `filterForFabricIndex`? | [`FabricIndex`](../../../../datatype/export/README.md#fabricindex) |

#### Returns

[`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]

#### Source

[packages/matter.js/src/protocol/interaction/EventHandler.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventHandler.ts#L76)

***

### pushEvent()

> **pushEvent**(`event`): [`StorageOperationResult`](../../../../storage/export/README.md#storageoperationresultst)\<`S`, [`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`EventData`](../interfaces/EventData.md)\<`any`\> |

#### Returns

[`StorageOperationResult`](../../../../storage/export/README.md#storageoperationresultst)\<`S`, [`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/EventHandler.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventHandler.ts#L113)

***

### create()

> `static` **create**(`eventStorage`): `Promise`\<[`EventHandler`](EventHandler.md)\<`any`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventStorage` | [`StorageContext`](../../../../storage/export/classes/StorageContext.md)\<`any`\> |

#### Returns

`Promise`\<[`EventHandler`](EventHandler.md)\<`any`\>\>

#### Source

[packages/matter.js/src/protocol/interaction/EventHandler.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/EventHandler.ts#L63)
