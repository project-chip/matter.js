[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / EventData

# Interface: EventData\<T\>

[exports/interaction](../modules/exports_interaction.md).EventData

Data of one Event

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`EventData`**

  ↳ [`EventStorageData`](exports_interaction.EventStorageData.md)

## Table of contents

### Properties

- [clusterId](exports_interaction.EventData.md#clusterid)
- [data](exports_interaction.EventData.md#data)
- [endpointId](exports_interaction.EventData.md#endpointid)
- [epochTimestamp](exports_interaction.EventData.md#epochtimestamp)
- [eventId](exports_interaction.EventData.md#eventid)
- [priority](exports_interaction.EventData.md#priority)

## Properties

### clusterId

• **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:21

___

### data

• **data**: `T`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:25

___

### endpointId

• **endpointId**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:20

___

### epochTimestamp

• **epochTimestamp**: `number`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:23

___

### eventId

• **eventId**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:22

___

### priority

• **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:24
