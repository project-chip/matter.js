[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / [\<internal\>](../modules/protocol_interaction_export._internal_.md) / EventPathWithEventData

# Interface: EventPathWithEventData\<T\>

[protocol/interaction/export](../modules/protocol_interaction_export.md).[\<internal\>](../modules/protocol_interaction_export._internal_.md).EventPathWithEventData

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [event](protocol_interaction_export._internal_.EventPathWithEventData.md#event)
- [path](protocol_interaction_export._internal_.EventPathWithEventData.md#path)
- [schema](protocol_interaction_export._internal_.EventPathWithEventData.md#schema)

## Properties

### event

• **event**: [`EventStorageData`](protocol_interaction_export.EventStorageData.md)\<`T`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L57)

___

### path

• **path**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\<`number`\>\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L55)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L56)
