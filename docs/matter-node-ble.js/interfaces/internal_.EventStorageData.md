[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / EventStorageData

# Interface: EventStorageData<T\>

[<internal>](../modules/internal_.md).EventStorageData

Data of an event which was triggered and stored internally

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`EventData`](internal_.EventData.md)<`T`\>

  ↳ **`EventStorageData`**

## Table of contents

### Properties

- [clusterId](internal_.EventStorageData.md#clusterid)
- [data](internal_.EventStorageData.md#data)
- [endpointId](internal_.EventStorageData.md#endpointid)
- [epochTimestamp](internal_.EventStorageData.md#epochtimestamp)
- [eventId](internal_.EventStorageData.md#eventid)
- [eventNumber](internal_.EventStorageData.md#eventnumber)
- [priority](internal_.EventStorageData.md#priority)

## Properties

### clusterId

• **clusterId**: [`ClusterId`](../modules/internal_.md#clusterid)

#### Inherited from

[EventData](internal_.EventData.md).[clusterId](internal_.EventData.md#clusterid)

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:18

___

### data

• **data**: `T`

#### Inherited from

[EventData](internal_.EventData.md).[data](internal_.EventData.md#data)

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:22

___

### endpointId

• **endpointId**: [`EndpointNumber`](../modules/internal_.md#endpointnumber)

#### Inherited from

[EventData](internal_.EventData.md).[endpointId](internal_.EventData.md#endpointid)

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:17

___

### epochTimestamp

• **epochTimestamp**: `number`

#### Inherited from

[EventData](internal_.EventData.md).[epochTimestamp](internal_.EventData.md#epochtimestamp)

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:20

___

### eventId

• **eventId**: [`EventId`](../modules/internal_.md#eventid)

#### Inherited from

[EventData](internal_.EventData.md).[eventId](internal_.EventData.md#eventid)

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:19

___

### eventNumber

• **eventNumber**: `number`

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:28

___

### priority

• **priority**: [`EventPriority`](../enums/internal_.EventPriority.md)

#### Inherited from

[EventData](internal_.EventData.md).[priority](internal_.EventData.md#priority)

#### Defined in

matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:21
