[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / EventHandler

# Class: EventHandler\<S\>

[exports/interaction](../modules/exports_interaction.md).EventHandler

Class that collects all triggered events up to a certain limit of events and handle logic
to handle subscriptions (TBD)

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) = `any` |

## Table of contents

### Constructors

- [constructor](exports_interaction.EventHandler.md#constructor)

### Properties

- [#private](exports_interaction.EventHandler.md##private)
- [eventNumber](exports_interaction.EventHandler.md#eventnumber)
- [eventStorage](exports_interaction.EventHandler.md#eventstorage)
- [events](exports_interaction.EventHandler.md#events)
- [storedEventCount](exports_interaction.EventHandler.md#storedeventcount)

### Accessors

- [construction](exports_interaction.EventHandler.md#construction)

### Methods

- [cleanUpEvents](exports_interaction.EventHandler.md#cleanupevents)
- [getEvents](exports_interaction.EventHandler.md#getevents)
- [pushEvent](exports_interaction.EventHandler.md#pushevent)
- [create](exports_interaction.EventHandler.md#create)

## Constructors

### constructor

• **new EventHandler**\<`S`\>(`eventStorage`): [`EventHandler`](exports_interaction.EventHandler.md)\<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`S`\> |

#### Returns

[`EventHandler`](exports_interaction.EventHandler.md)\<`S`\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:45

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:38

___

### eventNumber

• `Private` **eventNumber**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:40

___

### eventStorage

• `Private` `Readonly` **eventStorage**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:39

___

### events

• `Private` `Readonly` **events**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:42

___

### storedEventCount

• `Private` **storedEventCount**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:41

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/exports_cluster._internal_.AsyncConstruction-1.md)\<[`EventHandler`](exports_interaction.EventHandler.md)\<`any`\>\>

#### Returns

[`AsyncConstruction`](../interfaces/exports_cluster._internal_.AsyncConstruction-1.md)\<[`EventHandler`](exports_interaction.EventHandler.md)\<`any`\>\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:43

## Methods

### cleanUpEvents

▸ **cleanUpEvents**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:48

___

### getEvents

▸ **getEvents**(`eventPath`, `filters?`): [`EventStorageData`](../interfaces/exports_interaction.EventStorageData.md)\<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventPath` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`ClusterId`](../modules/exports_datatype.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\> |
| `filters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)\<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |

#### Returns

[`EventStorageData`](../interfaces/exports_interaction.EventStorageData.md)\<`any`\>[]

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:46

___

### pushEvent

▸ **pushEvent**(`event`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, [`EventStorageData`](../interfaces/exports_interaction.EventStorageData.md)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`EventData`](../interfaces/exports_interaction.EventData.md)\<`any`\> |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, [`EventStorageData`](../interfaces/exports_interaction.EventStorageData.md)\<`any`\>\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:47

___

### create

▸ **create**(`eventStorage`): `Promise`\<[`EventHandler`](exports_interaction.EventHandler.md)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |

#### Returns

`Promise`\<[`EventHandler`](exports_interaction.EventHandler.md)\<`any`\>\>

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:44
