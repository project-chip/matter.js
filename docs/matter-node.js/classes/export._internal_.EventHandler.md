[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / EventHandler

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

packages/matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:39

## Properties

### eventNumber

• `Private` **eventNumber**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:36

___

### eventStorage

• `Private` `Readonly` **eventStorage**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:35

___

### events

• `Private` `Readonly` **events**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:38

___

### storedEventCount

• `Private` **storedEventCount**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:37

## Methods

### cleanUpEvents

▸ **cleanUpEvents**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:50

___

### getEvents

▸ **getEvents**(`eventPath`, `filters?`): [`EventStorageData`](../interfaces/export._internal_.EventStorageData.md)<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventPath` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`ClusterId`](../modules/exports_datatype.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`EventId`](../modules/exports_datatype.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\> |
| `filters?` | [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/exports_tlv.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/exports_tlv.OptionalFieldType.md)<[`NodeId`](../modules/exports_datatype.md#nodeid)\>  }\>[] |

#### Returns

[`EventStorageData`](../interfaces/export._internal_.EventStorageData.md)<`any`\>[]

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:40

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
| `clusterId` | [`ClusterId`](../modules/exports_datatype.md#clusterid) |
| `data` | `any` |
| `endpointId` | [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber) |
| `epochTimestamp` | `number` |
| `eventId` | [`EventId`](../modules/exports_datatype.md#eventid) |
| `eventNumber` | `number` |
| `priority` | [`EventPriority`](../enums/exports_cluster.EventPriority.md) |

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:41
