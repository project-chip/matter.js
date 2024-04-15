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

[packages/matter.js/src/protocol/interaction/EventHandler.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L68)

## Properties

### #construction

• `Private` **#construction**: [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`EventHandler`](protocol_interaction_export.EventHandler.md)\<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L56)

___

### eventNumber

• `Private` **eventNumber**: [`EventNumber`](../modules/datatype_export.md#eventnumber)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L49)

___

### eventStorage

• `Private` `Readonly` **eventStorage**: [`StorageContext`](storage_export.StorageContext.md)\<`S`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L68)

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

[packages/matter.js/src/protocol/interaction/EventHandler.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L51)

___

### storedEventCount

• `Private` **storedEventCount**: `number` = `0`

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L50)

## Accessors

### construction

• `get` **construction**(): [`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`EventHandler`](protocol_interaction_export.EventHandler.md)\<`any`\>\>

#### Returns

[`AsyncConstruction`](../interfaces/behavior_cluster_export._internal_.AsyncConstruction-1.md)\<[`EventHandler`](protocol_interaction_export.EventHandler.md)\<`any`\>\>

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L58)

## Methods

### cleanUpEvents

▸ **cleanUpEvents**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L123)

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

[packages/matter.js/src/protocol/interaction/EventHandler.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L75)

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

[packages/matter.js/src/protocol/interaction/EventHandler.ts:104](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L104)

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

[packages/matter.js/src/protocol/interaction/EventHandler.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L62)
