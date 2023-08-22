[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / EventHandler

# Class: EventHandler

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).EventHandler

Class that collects all triggered events up to a certain limit of events and handle logic
to handle subscriptions (TBD)

## Table of contents

### Constructors

- [constructor](export._internal_.EventHandler.md#constructor)

### Properties

- [eventNumber](export._internal_.EventHandler.md#eventnumber)
- [eventStorage](export._internal_.EventHandler.md#eventstorage)
- [events](export._internal_.EventHandler.md#events)
- [storedEventCount](export._internal_.EventHandler.md#storedeventcount)

### Methods

- [cleanUpEvents](export._internal_.EventHandler.md#cleanupevents)
- [getEvents](export._internal_.EventHandler.md#getevents)
- [pushEvent](export._internal_.EventHandler.md#pushevent)

## Constructors

### constructor

• **new EventHandler**(`storage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](storage_export.StorageContext.md) |

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:54](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventHandler.ts#L54)

## Properties

### eventNumber

• `Private` **eventNumber**: `number` = `0`

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:46](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventHandler.ts#L46)

___

### eventStorage

• `Private` `Readonly` **eventStorage**: [`StorageContext`](storage_export.StorageContext.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventHandler.ts#L45)

___

### events

• `Private` `Readonly` **events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `0` | [`EventStorageData`](../interfaces/export._internal_.EventStorageData.md)<`any`\>[] |
| `1` | [`EventStorageData`](../interfaces/export._internal_.EventStorageData.md)<`any`\>[] |
| `2` | [`EventStorageData`](../interfaces/export._internal_.EventStorageData.md)<`any`\>[] |

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:48](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventHandler.ts#L48)

___

### storedEventCount

• `Private` **storedEventCount**: `number` = `0`

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:47](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventHandler.ts#L47)

## Methods

### cleanUpEvents

▸ **cleanUpEvents**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:99](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventHandler.ts#L99)

___

### getEvents

▸ **getEvents**(`eventPath`, `filters?`): [`EventStorageData`](../interfaces/export._internal_.EventStorageData.md)<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventPath` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\> |
| `filters?` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[] |

#### Returns

[`EventStorageData`](../interfaces/export._internal_.EventStorageData.md)<`any`\>[]

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:60](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventHandler.ts#L60)

___

### pushEvent

▸ **pushEvent**(`event`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`EventData`](../interfaces/export._internal_.EventData.md)<`any`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/datatype_export.md#clusterid) |
| `data` | `any` |
| `endpointId` | [`EndpointNumber`](../modules/datatype_export.md#endpointnumber) |
| `epochTimestamp` | `number` |
| `eventId` | [`EventId`](../modules/datatype_export.md#eventid) |
| `eventNumber` | `number` |
| `priority` | [`EventPriority`](../enums/cluster_export.EventPriority.md) |

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventHandler.ts#L86)
