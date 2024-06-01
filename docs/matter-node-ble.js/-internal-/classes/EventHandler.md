[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / EventHandler

# Class: EventHandler\<S\>

Class that collects all triggered events up to a certain limit of events and handle logic
to handle subscriptions (TBD)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `S` *extends* [`Storage`](../interfaces/Storage.md) | `any` |

## Constructors

### new EventHandler()

> **new EventHandler**\<`S`\>(`eventStorage`): [`EventHandler`](EventHandler.md)\<`S`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventStorage` | [`StorageContext`](StorageContext.md)\<`S`\> |

#### Returns

[`EventHandler`](EventHandler.md)\<`S`\>

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:46

## Properties

### #private

> `private` **#private**: `any`

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:39

***

### eventNumber

> `private` **eventNumber**: `any`

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:41

***

### eventStorage

> `private` `readonly` **eventStorage**: `any`

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:40

***

### events

> `private` `readonly` **events**: `any`

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:43

***

### storedEventCount

> `private` **storedEventCount**: `any`

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:42

## Accessors

### construction

> `get` **construction**(): [`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`EventHandler`](EventHandler.md)\<`any`\>\>

#### Returns

[`AsyncConstruction`](../interfaces/AsyncConstruction.md)\<[`EventHandler`](EventHandler.md)\<`any`\>\>

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:44

## Methods

### cleanUpEvents()

> **cleanUpEvents**(): `void`

#### Returns

`void`

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:49

***

### getEvents()

> **getEvents**(`eventPath`, `filters`?, `filterForFabricIndex`?): [`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventPath` | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\> |
| `filters`? | [`TypeFromFields`](../README.md#typefromfieldsf)\<`object`\>[] |
| `filterForFabricIndex`? | [`FabricIndex`](../README.md#fabricindex-1) |

#### Returns

[`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>[]

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:47

***

### pushEvent()

> **pushEvent**(`event`): [`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, [`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | [`EventData`](../interfaces/EventData.md)\<`any`\> |

#### Returns

[`StorageOperationResult`](../README.md#storageoperationresultst)\<`S`, [`EventStorageData`](../interfaces/EventStorageData.md)\<`any`\>\>

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:48

***

### create()

> `static` **create**(`eventStorage`): `Promise`\<[`EventHandler`](EventHandler.md)\<`any`\>\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventStorage` | [`StorageContext`](StorageContext.md)\<`any`\> |

#### Returns

`Promise`\<[`EventHandler`](EventHandler.md)\<`any`\>\>

#### Source

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:45
