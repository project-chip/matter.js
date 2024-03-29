[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / EventHandler

# Class: EventHandler\<S\>

[protocol/interaction/export](../modules/protocol_interaction_export.md).EventHandler

Class that collects all triggered events up to a certain limit of events and handle logic
to handle subscriptions (TBD)

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) = `any` |

## Table of contents

### Constructors

- [constructor](protocol_interaction_export.EventHandler.md#constructor)

### Properties

- [#construction](protocol_interaction_export.EventHandler.md##construction)
- [eventNumber](protocol_interaction_export.EventHandler.md#eventnumber)
- [eventStorage](protocol_interaction_export.EventHandler.md#eventstorage)
- [events](protocol_interaction_export.EventHandler.md#events)
- [storedEventCount](protocol_interaction_export.EventHandler.md#storedeventcount)

### Accessors

- [construction](protocol_interaction_export.EventHandler.md#construction)

### Methods

- [cleanUpEvents](protocol_interaction_export.EventHandler.md#cleanupevents)
- [getEvents](protocol_interaction_export.EventHandler.md#getevents)
- [pushEvent](protocol_interaction_export.EventHandler.md#pushevent)
- [create](protocol_interaction_export.EventHandler.md#create)

## Constructors

### constructor

• **new EventHandler**\<`S`\>(`eventStorage`): [`EventHandler`](protocol_interaction_export.EventHandler.md)\<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](../interfaces/storage_export.Storage.md) = `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`S`\> |

#### Returns

[`EventHandler`](protocol_interaction_export.EventHandler.md)\<`S`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:67](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/EventHandler.ts#L67)

## Properties

### #construction

• `Private` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`EventHandler`](protocol_interaction_export.EventHandler.md)\<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:55](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/EventHandler.ts#L55)

___

### eventNumber

• `Private` **eventNumber**: `number` = `0`

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:48](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/EventHandler.ts#L48)

___

### eventStorage

• `Private` `Readonly` **eventStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`S`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:67](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/EventHandler.ts#L67)

___

### events

• `Private` `Readonly` **events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `0` | [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[] |
| `1` | [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[] |
| `2` | [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[] |

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:50](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/EventHandler.ts#L50)

___

### storedEventCount

• `Private` **storedEventCount**: `number` = `0`

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:49](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/EventHandler.ts#L49)

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`EventHandler`](protocol_interaction_export.EventHandler.md)\<`any`\>\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`EventHandler`](protocol_interaction_export.EventHandler.md)\<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:57](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/EventHandler.ts#L57)

## Methods

### cleanUpEvents

▸ **cleanUpEvents**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:120](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/EventHandler.ts#L120)

___

### getEvents

▸ **getEvents**(`eventPath`, `filters?`): [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventPath` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\> |
| `filters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |

#### Returns

[`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>[]

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:74](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/EventHandler.ts#L74)

___

### pushEvent

▸ **pushEvent**(`event`): [`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`EventData`](../interfaces/protocol_interaction_export.EventData.md)\<`any`\> |

#### Returns

[`StorageOperationResult`](../modules/storage_export.md#storageoperationresult)\<`S`, [`EventStorageData`](../interfaces/protocol_interaction_export.EventStorageData.md)\<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:101](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/EventHandler.ts#L101)

___

### create

▸ **create**(`eventStorage`): `Promise`\<[`EventHandler`](protocol_interaction_export.EventHandler.md)\<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventStorage` | [`StorageContext`](storage_export.StorageContext.md)\<`any`\> |

#### Returns

`Promise`\<[`EventHandler`](protocol_interaction_export.EventHandler.md)\<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:61](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/protocol/interaction/EventHandler.ts#L61)
