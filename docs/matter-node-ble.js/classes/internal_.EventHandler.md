[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EventHandler

# Class: EventHandler

[<internal>](../modules/internal_.md).EventHandler

Class that collects all triggered events up to a certain limit of events and handle logic
to handle subscriptions (TBD)

## Table of contents

### Constructors

- [constructor](internal_.EventHandler.md#constructor)

### Properties

- [eventNumber](internal_.EventHandler.md#eventnumber)
- [eventStorage](internal_.EventHandler.md#eventstorage)
- [events](internal_.EventHandler.md#events)
- [storedEventCount](internal_.EventHandler.md#storedeventcount)

### Methods

- [cleanUpEvents](internal_.EventHandler.md#cleanupevents)
- [getEvents](internal_.EventHandler.md#getevents)
- [pushEvent](internal_.EventHandler.md#pushevent)

## Constructors

### constructor

• **new EventHandler**(`storage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `storage` | [`StorageContext`](internal_.StorageContext.md) |

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:39

## Properties

### eventNumber

• `Private` **eventNumber**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:36

___

### eventStorage

• `Private` `Readonly` **eventStorage**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:35

___

### events

• `Private` `Readonly` **events**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:38

___

### storedEventCount

• `Private` **storedEventCount**: `any`

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:37

## Methods

### cleanUpEvents

▸ **cleanUpEvents**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:50

___

### getEvents

▸ **getEvents**(`eventPath`, `filters?`): [`EventStorageData`](../interfaces/internal_.EventStorageData.md)<`any`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventPath` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `clusterId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`ClusterId`](../modules/internal_.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EndpointNumber`](../modules/internal_.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`EventId`](../modules/internal_.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<`boolean`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\> |
| `filters?` | [`TypeFromFields`](../modules/internal_.md#typefromfields)<{ `eventMin`: [`FieldType`](../interfaces/internal_.FieldType.md)<`number` \| `bigint`\> ; `nodeId`: [`OptionalFieldType`](../interfaces/internal_.OptionalFieldType.md)<[`NodeId`](../modules/internal_.md#nodeid)\>  }\>[] |

#### Returns

[`EventStorageData`](../interfaces/internal_.EventStorageData.md)<`any`\>[]

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:40

___

### pushEvent

▸ **pushEvent**(`event`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`EventData`](../interfaces/internal_.EventData.md)<`any`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../modules/internal_.md#clusterid) |
| `data` | `any` |
| `endpointId` | [`EndpointNumber`](../modules/internal_.md#endpointnumber) |
| `epochTimestamp` | `number` |
| `eventId` | [`EventId`](../modules/internal_.md#eventid) |
| `eventNumber` | `number` |
| `priority` | [`EventPriority`](../enums/internal_.EventPriority.md) |

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:41
