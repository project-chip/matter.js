[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / [\<internal\>](../modules/exports_interaction._internal_.md) / EventStorageData

# Interface: EventStorageData\<T\>

[exports/interaction](../modules/exports_interaction.md).[\<internal\>](../modules/exports_interaction._internal_.md).EventStorageData

Data of an event which was triggered and stored internally

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`EventData`](exports_interaction._internal_.EventData.md)\<`T`\>

  ↳ **`EventStorageData`**

## Table of contents

### Properties

- [clusterId](exports_interaction._internal_.EventStorageData.md#clusterid)
- [data](exports_interaction._internal_.EventStorageData.md#data)
- [endpointId](exports_interaction._internal_.EventStorageData.md#endpointid)
- [epochTimestamp](exports_interaction._internal_.EventStorageData.md#epochtimestamp)
- [eventId](exports_interaction._internal_.EventStorageData.md#eventid)
- [eventNumber](exports_interaction._internal_.EventStorageData.md#eventnumber)
- [priority](exports_interaction._internal_.EventStorageData.md#priority)

## Properties

### clusterId

• **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Inherited from

[EventData](exports_interaction._internal_.EventData.md).[clusterId](exports_interaction._internal_.EventData.md#clusterid)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:18

___

### data

• **data**: `T`

#### Inherited from

[EventData](exports_interaction._internal_.EventData.md).[data](exports_interaction._internal_.EventData.md#data)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:22

___

### endpointId

• **endpointId**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[EventData](exports_interaction._internal_.EventData.md).[endpointId](exports_interaction._internal_.EventData.md#endpointid)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:17

___

### epochTimestamp

• **epochTimestamp**: `number`

#### Inherited from

[EventData](exports_interaction._internal_.EventData.md).[epochTimestamp](exports_interaction._internal_.EventData.md#epochtimestamp)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:20

___

### eventId

• **eventId**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Inherited from

[EventData](exports_interaction._internal_.EventData.md).[eventId](exports_interaction._internal_.EventData.md#eventid)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:19

___

### eventNumber

• **eventNumber**: `number`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:28

___

### priority

• **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Inherited from

[EventData](exports_interaction._internal_.EventData.md).[priority](exports_interaction._internal_.EventData.md#priority)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:21
