[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / EventHandler

# Class: EventHandler\<S\>

[\<internal\>](../modules/internal_.md).EventHandler

Class that collects all triggered events up to a certain limit of events and handle logic
to handle subscriptions (TBD)

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](../interfaces/internal_.Storage.md) = `any` |

## Table of contents

### Constructors

- [constructor](internal_.EventHandler.md#constructor)

### Properties

- [#private](internal_.EventHandler.md##private)
- [eventNumber](internal_.EventHandler.md#eventnumber)
- [eventStorage](internal_.EventHandler.md#eventstorage)
- [events](internal_.EventHandler.md#events)
- [storedEventCount](internal_.EventHandler.md#storedeventcount)

### Accessors

- [construction](internal_.EventHandler.md#construction)

### Methods

- [cleanUpEvents](internal_.EventHandler.md#cleanupevents)
- [getEvents](internal_.EventHandler.md#getevents)
- [pushEvent](internal_.EventHandler.md#pushevent)
- [create](internal_.EventHandler.md#create)

## Constructors

### constructor

• **new EventHandler**\<`S`\>(`eventStorage`): [`EventHandler`](internal_.EventHandler.md)\<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](../interfaces/internal_.Storage.md) = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventStorage` | [`StorageContext`](internal_.StorageContext.md)\<`S`\> |

#### Returns

[`EventHandler`](internal_.EventHandler.md)\<`S`\>

#### Defined in

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:45

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:38

___

### eventNumber

• `Private` **eventNumber**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:40

___

### eventStorage

• `Private` `Readonly` **eventStorage**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:39

___

### events

• `Private` `Readonly` **events**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:42

___

### storedEventCount

• `Private` **storedEventCount**: `any`

#### Defined in

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:41

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/internal_.AsyncConstruction-1.md)\<[`EventHandler`](internal_.EventHandler.md)\<`any`\>\>

#### Returns

[`AsyncConstruction`](../interfaces/internal_.AsyncConstruction-1.md)\<[`EventHandler`](internal_.EventHandler.md)\<`any`\>\>

#### Defined in

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:43

## Methods

### cleanUpEvents

▸ **cleanUpEvents**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:48

___

### getEvents

▸ **getEvents**(`eventPath`, `filters?`): [`EventStorageData`](../interfaces/internal_.EventStorageData.md)\<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventPath` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`ClusterId`](../modules/internal_.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`EventId`](../modules/internal_.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\> |
| `filters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)\<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |

#### Returns

[`EventStorageData`](../interfaces/internal_.EventStorageData.md)\<`any`\>[]

#### Defined in

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:46

___

### pushEvent

▸ **pushEvent**(`event`): [`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, [`EventStorageData`](../interfaces/internal_.EventStorageData.md)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`EventData`](../interfaces/internal_.EventData.md)\<`any`\> |

#### Returns

[`StorageOperationResult`](../modules/internal_.md#storageoperationresult)\<`S`, [`EventStorageData`](../interfaces/internal_.EventStorageData.md)\<`any`\>\>

#### Defined in

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:47

___

### create

▸ **create**(`eventStorage`): `Promise`\<[`EventHandler`](internal_.EventHandler.md)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventStorage` | [`StorageContext`](internal_.StorageContext.md)\<`any`\> |

#### Returns

`Promise`\<[`EventHandler`](internal_.EventHandler.md)\<`any`\>\>

#### Defined in

matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:44
