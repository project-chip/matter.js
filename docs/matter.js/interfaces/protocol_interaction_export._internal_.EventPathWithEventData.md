[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/interaction/export](../modules/protocol_interaction_export.md) / [\<internal\>](../modules/protocol_interaction_export._internal_.md) / EventPathWithEventData

# Interface: EventPathWithEventData\<T\>

[protocol/interaction/export](../modules/protocol_interaction_export.md).[\<internal\>](../modules/protocol_interaction_export._internal_.md).EventPathWithEventData

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [data](protocol_interaction_export._internal_.EventPathWithEventData.md#data)
- [event](protocol_interaction_export._internal_.EventPathWithEventData.md#event)
- [path](protocol_interaction_export._internal_.EventPathWithEventData.md#path)
- [schema](protocol_interaction_export._internal_.EventPathWithEventData.md#schema)

## Properties

### data

• **data**: [`EventStorageData`](protocol_interaction_export.EventStorageData.md)\<`T`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:63](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L63)

___

### event

• **event**: [`AnyEventServer`](../modules/cluster_export.md#anyeventserver)\<`any`, `any`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:61](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L61)

___

### path

• **path**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `clusterId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`ClusterId`](../modules/datatype_export.md#clusterid)\> ; `endpointId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EndpointNumber`](../modules/datatype_export.md#endpointnumber)\> ; `eventId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`EventId`](../modules/datatype_export.md#eventid)\> ; `isUrgent`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<`boolean`\> ; `nodeId`: [`OptionalFieldType`](tlv_export.OptionalFieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:60](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L60)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts:62](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/protocol/interaction/SubscriptionHandler.ts#L62)
