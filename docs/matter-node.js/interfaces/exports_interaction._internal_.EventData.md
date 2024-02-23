[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/interaction](../modules/exports_interaction.md) / [\<internal\>](../modules/exports_interaction._internal_.md) / EventData

# Interface: EventData\<T\>

[exports/interaction](../modules/exports_interaction.md).[\<internal\>](../modules/exports_interaction._internal_.md).EventData

Data of one Event

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`EventData`**

  ↳ [`EventStorageData`](exports_interaction._internal_.EventStorageData.md)

## Table of contents

### Properties

- [clusterId](exports_interaction._internal_.EventData.md#clusterid)
- [data](exports_interaction._internal_.EventData.md#data)
- [endpointId](exports_interaction._internal_.EventData.md#endpointid)
- [epochTimestamp](exports_interaction._internal_.EventData.md#epochtimestamp)
- [eventId](exports_interaction._internal_.EventData.md#eventid)
- [priority](exports_interaction._internal_.EventData.md#priority)

## Properties

### clusterId

• **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:18

___

### data

• **data**: `T`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:22

___

### endpointId

• **endpointId**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:17

___

### epochTimestamp

• **epochTimestamp**: `number`

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:20

___

### eventId

• **eventId**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:19

___

### priority

• **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Defined in

packages/matter.js/dist/esm/protocol/interaction/EventHandler.d.ts:21
