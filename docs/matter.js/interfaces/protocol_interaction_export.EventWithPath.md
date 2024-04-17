[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / EventWithPath

# Interface: EventWithPath

[protocol/interaction/export](../modules/protocol_interaction_export.md).EventWithPath

## Table of contents

### Properties

- [event](protocol_interaction_export.EventWithPath.md#event)
- [path](protocol_interaction_export.EventWithPath.md#path)

## Properties

### event

• **event**: [`EventServer`](../classes/cluster_export.EventServer.md)\<`any`, `any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:98](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L98)

___

### path

• **path**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionServer.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/InteractionServer.ts#L97)
