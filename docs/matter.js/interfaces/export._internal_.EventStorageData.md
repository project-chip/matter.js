[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / EventStorageData

# Interface: EventStorageData<T\>

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).EventStorageData

Data of an event which was triggered and stored internally

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`EventData`](export._internal_.EventData.md)<`T`\>

  ↳ **`EventStorageData`**

## Table of contents

### Properties

- [clusterId](export._internal_.EventStorageData.md#clusterid)
- [data](export._internal_.EventStorageData.md#data)
- [endpointId](export._internal_.EventStorageData.md#endpointid)
- [epochTimestamp](export._internal_.EventStorageData.md#epochtimestamp)
- [eventId](export._internal_.EventStorageData.md#eventid)
- [eventNumber](export._internal_.EventStorageData.md#eventnumber)
- [priority](export._internal_.EventStorageData.md#priority)

## Properties

### clusterId

• **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Inherited from

[EventData](export._internal_.EventData.md).[clusterId](export._internal_.EventData.md#clusterid)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventHandler.ts#L26)

___

### data

• **data**: `T`

#### Inherited from

[EventData](export._internal_.EventData.md).[data](export._internal_.EventData.md#data)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:30](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventHandler.ts#L30)

___

### endpointId

• **endpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[EventData](export._internal_.EventData.md).[endpointId](export._internal_.EventData.md#endpointid)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:25](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventHandler.ts#L25)

___

### epochTimestamp

• **epochTimestamp**: `number`

#### Inherited from

[EventData](export._internal_.EventData.md).[epochTimestamp](export._internal_.EventData.md#epochtimestamp)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventHandler.ts#L28)

___

### eventId

• **eventId**: [`EventId`](../modules/datatype_export.md#eventid)

#### Inherited from

[EventData](export._internal_.EventData.md).[eventId](export._internal_.EventData.md#eventid)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:27](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventHandler.ts#L27)

___

### eventNumber

• **eventNumber**: `number`

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:37](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventHandler.ts#L37)

___

### priority

• **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Inherited from

[EventData](export._internal_.EventData.md).[priority](export._internal_.EventData.md#priority)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/interaction/EventHandler.ts#L29)
