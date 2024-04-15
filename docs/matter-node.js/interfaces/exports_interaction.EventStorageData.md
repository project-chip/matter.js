[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / EventStorageData

# Interface: EventStorageData\<T\>

[exports/interaction](../modules/exports_interaction.md).EventStorageData

Data of an event which was triggered and stored internally

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`EventData`](exports_interaction.EventData.md)\<`T`\>

  ↳ **`EventStorageData`**

## Table of contents

### Properties

- [clusterId](exports_interaction.EventStorageData.md#clusterid)
- [data](exports_interaction.EventStorageData.md#data)
- [endpointId](exports_interaction.EventStorageData.md#endpointid)
- [epochTimestamp](exports_interaction.EventStorageData.md#epochtimestamp)
- [eventId](exports_interaction.EventStorageData.md#eventid)
- [eventNumber](exports_interaction.EventStorageData.md#eventnumber)
- [priority](exports_interaction.EventStorageData.md#priority)

## Properties

### clusterId

• **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Inherited from

[EventData](exports_interaction.EventData.md).[clusterId](exports_interaction.EventData.md#clusterid)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:21

___

### data

• **data**: `T`

#### Inherited from

[EventData](exports_interaction.EventData.md).[data](exports_interaction.EventData.md#data)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:25

___

### endpointId

• **endpointId**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

[EventData](exports_interaction.EventData.md).[endpointId](exports_interaction.EventData.md#endpointid)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:20

___

### epochTimestamp

• **epochTimestamp**: `number`

#### Inherited from

[EventData](exports_interaction.EventData.md).[epochTimestamp](exports_interaction.EventData.md#epochtimestamp)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:23

___

### eventId

• **eventId**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Inherited from

[EventData](exports_interaction.EventData.md).[eventId](exports_interaction.EventData.md#eventid)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:22

___

### eventNumber

• **eventNumber**: [`EventNumber`](../modules/exports_datatype.md#eventnumber)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:31

___

### priority

• **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Inherited from

[EventData](exports_interaction.EventData.md).[priority](exports_interaction.EventData.md#priority)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:24
