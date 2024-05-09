[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / EventStorageData

# Interface: EventStorageData\<T\>

[protocol/interaction/export](../modules/protocol_interaction_export.md).EventStorageData

Data of an event which was triggered and stored internally

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`EventData`](protocol_interaction_export.EventData.md)\<`T`\>

  ↳ **`EventStorageData`**

## Table of contents

### Properties

- [clusterId](protocol_interaction_export.EventStorageData.md#clusterid)
- [data](protocol_interaction_export.EventStorageData.md#data)
- [endpointId](protocol_interaction_export.EventStorageData.md#endpointid)
- [epochTimestamp](protocol_interaction_export.EventStorageData.md#epochtimestamp)
- [eventId](protocol_interaction_export.EventStorageData.md#eventid)
- [eventNumber](protocol_interaction_export.EventStorageData.md#eventnumber)
- [priority](protocol_interaction_export.EventStorageData.md#priority)

## Properties

### clusterId

• **clusterId**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Inherited from

[EventData](protocol_interaction_export.EventData.md).[clusterId](protocol_interaction_export.EventData.md#clusterid)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L30)

___

### data

• **data**: `T`

#### Inherited from

[EventData](protocol_interaction_export.EventData.md).[data](protocol_interaction_export.EventData.md#data)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L34)

___

### endpointId

• **endpointId**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

[EventData](protocol_interaction_export.EventData.md).[endpointId](protocol_interaction_export.EventData.md#endpointid)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L29)

___

### epochTimestamp

• **epochTimestamp**: `number`

#### Inherited from

[EventData](protocol_interaction_export.EventData.md).[epochTimestamp](protocol_interaction_export.EventData.md#epochtimestamp)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L32)

___

### eventId

• **eventId**: [`EventId`](../modules/datatype_export.md#eventid)

#### Inherited from

[EventData](protocol_interaction_export.EventData.md).[eventId](protocol_interaction_export.EventData.md#eventid)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L31)

___

### eventNumber

• **eventNumber**: [`EventNumber`](../modules/datatype_export.md#eventnumber)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L41)

___

### priority

• **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Inherited from

[EventData](protocol_interaction_export.EventData.md).[priority](protocol_interaction_export.EventData.md#priority)

#### Defined in

[packages/matter.js/src/protocol/interaction/EventHandler.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/EventHandler.ts#L33)
