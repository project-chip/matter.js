[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [\<internal\>](../modules/cluster_export._internal_.md) / EventData

# Interface: EventData\<T\>

[cluster/export](../modules/cluster_export.md).[\<internal\>](../modules/cluster_export._internal_.md).EventData

Data of one Event

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`EventData`**

  ↳ [`EventStorageData`](protocol_interaction_export._internal_.EventStorageData.md)

## Table of contents

### Properties

- [clusterId](cluster_export._internal_.EventData.md#clusterid)
- [data](cluster_export._internal_.EventData.md#data)
- [endpointId](cluster_export._internal_.EventData.md#endpointid)
- [epochTimestamp](cluster_export._internal_.EventData.md#epochtimestamp)
- [eventId](cluster_export._internal_.EventData.md#eventid)
- [priority](cluster_export._internal_.EventData.md#priority)

## Properties

### clusterId

• **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:26](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/interaction/EventHandler.ts#L26)

___

### data

• **data**: `T`

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:30](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/interaction/EventHandler.ts#L30)

___

### endpointId

• **endpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:25](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/interaction/EventHandler.ts#L25)

___

### epochTimestamp

• **epochTimestamp**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:28](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/interaction/EventHandler.ts#L28)

___

### eventId

• **eventId**: [`EventId`](../modules/datatype_export.md#eventid)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:27](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/interaction/EventHandler.ts#L27)

___

### priority

• **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:29](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/interaction/EventHandler.ts#L29)
