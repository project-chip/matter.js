[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / EventData

# Interface: EventData<T\>

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).EventData

Data of one Event

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`EventData`**

  ↳ [`EventStorageData`](export._internal_.EventStorageData.md)

## Table of contents

### Properties

- [clusterId](export._internal_.EventData.md#clusterid)
- [data](export._internal_.EventData.md#data)
- [endpointId](export._internal_.EventData.md#endpointid)
- [epochTimestamp](export._internal_.EventData.md#epochtimestamp)
- [eventId](export._internal_.EventData.md#eventid)
- [priority](export._internal_.EventData.md#priority)

## Properties

### clusterId

• **clusterId**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:18

___

### data

• **data**: `T`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:22

___

### endpointId

• **endpointId**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:17

___

### epochTimestamp

• **epochTimestamp**: `number`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:20

___

### eventId

• **eventId**: [`EventId`](../modules/exports_datatype.md#eventid)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:19

___

### priority

• **priority**: [`EventPriority`](../enums/exports_cluster.EventPriority.md)

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/EventHandler.d.ts:21
