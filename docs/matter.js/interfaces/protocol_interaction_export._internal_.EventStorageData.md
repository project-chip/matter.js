[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / [\<internal\>](../modules/protocol_interaction_export._internal_.md) / EventStorageData

# Interface: EventStorageData\<T\>

[protocol/interaction/export](../modules/protocol_interaction_export.md).[\<internal\>](../modules/protocol_interaction_export._internal_.md).EventStorageData

Data of an event which was triggered and stored internally

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`EventData`](cluster_export._internal_.EventData.md)\<`T`\>

  ↳ **`EventStorageData`**

## Table of contents

### Properties

- [clusterId](protocol_interaction_export._internal_.EventStorageData.md#clusterid)
- [data](protocol_interaction_export._internal_.EventStorageData.md#data)
- [endpointId](protocol_interaction_export._internal_.EventStorageData.md#endpointid)
- [epochTimestamp](protocol_interaction_export._internal_.EventStorageData.md#epochtimestamp)
- [eventId](protocol_interaction_export._internal_.EventStorageData.md#eventid)
- [eventNumber](protocol_interaction_export._internal_.EventStorageData.md#eventnumber)
- [priority](protocol_interaction_export._internal_.EventStorageData.md#priority)

## Properties

### clusterId

• **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Inherited from

[EventData](cluster_export._internal_.EventData.md).[clusterId](cluster_export._internal_.EventData.md#clusterid)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:26](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/interaction/EventHandler.ts#L26)

___

### data

• **data**: `T`

#### Inherited from

[EventData](cluster_export._internal_.EventData.md).[data](cluster_export._internal_.EventData.md#data)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:30](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/interaction/EventHandler.ts#L30)

___

### endpointId

• **endpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[EventData](cluster_export._internal_.EventData.md).[endpointId](cluster_export._internal_.EventData.md#endpointid)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:25](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/interaction/EventHandler.ts#L25)

___

### epochTimestamp

• **epochTimestamp**: `number`

#### Inherited from

[EventData](cluster_export._internal_.EventData.md).[epochTimestamp](cluster_export._internal_.EventData.md#epochtimestamp)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:28](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/interaction/EventHandler.ts#L28)

___

### eventId

• **eventId**: [`EventId`](../modules/datatype_export.md#eventid)

#### Inherited from

[EventData](cluster_export._internal_.EventData.md).[eventId](cluster_export._internal_.EventData.md#eventid)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:27](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/interaction/EventHandler.ts#L27)

___

### eventNumber

• **eventNumber**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:37](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/interaction/EventHandler.ts#L37)

___

### priority

• **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Inherited from

[EventData](cluster_export._internal_.EventData.md).[priority](cluster_export._internal_.EventData.md#priority)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:29](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/protocol/interaction/EventHandler.ts#L29)
